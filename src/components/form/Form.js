import "./Form.css";

function Form(){
    return(
        <div className="wrap form">
            
              <h1>Deliciousness to your inbox</h1>
            <p>Imagine your daily dose of digital bills and endless notifications being interrupted by something truly mouthwatering — that is the promise of deliciousness delivered straight to your inbox.</p>
            <div className="form1">
               <form >
              <input type="text" placeholder="Your email address..." />
              <button>Subscribe</button>
            </form>  
            </div>
           
           
            
        </div>
    )
}
export default Form;