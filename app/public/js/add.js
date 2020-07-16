// Code here handles what happens when a user submits a new shoe on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
    event.preventDefault();
    
    function FileUpload() {

      // const [file, setFile] = useState(''); // storing the uploaded file
      // storing the recived file from backend
      const [data, getFile] = useState({ name: "", path: "" });
      const [progress, setProgess] = useState(0); // progess bar
      const el = useRef(); // accesing input element
  
      const handleChange = (e) => {
          setProgess(0)
          const file = e.target.files[0]; // accessing file
          console.log(file);
          setFile(file); // storing file
      }
  
      const uploadFile = () => {
          const formData = new FormData();
          formData.append('file', file); // appending file
          axios.post('http://localhost:4500/upload', formData, {
              onUploadProgress: (ProgressEvent) => {
                  let progress = Math.round(
                  ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                  setProgess(progress);
              }
          }).then(res => {
              console.log(res);
              getFile({ name: res.data.name,
                       path: 'http://localhost:4500' + res.data.path
                     })
          }).catch(err => console.log(err))}

      ;
  }
  
  export default FileUpload;

    // make a newShoe obj
    var newShoe = {

      // role from brand input
      brand: $("#brand").val().trim(),
        // name from name input
      name: $("#name").val().trim(),
      // age from size input
      size: $("#size").val().trim(),
      // points from color input
      color: $("#color").val().trim(),
      // points from color input
      condition: $("#condition").val().trim()
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/new", newShoe)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a shoe with an alert window
        alert("Adding shoe...");
      });
  
    // empty each input box by replacing the value with an empty string
    $("#brand").val("");
    $("#name").val("");
    $("#size").val("");
    $("#color").val("");
    $("#condition").val("");
  
  });
  