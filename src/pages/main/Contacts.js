import cont from './Group 13936.webp'
import Form from '../../components/form/Form';

function Contacts(){

    return(
        <div className="wrap">
            <h2>Contact us</h2>
            <div className="form-contact">
                <img src={cont} alt="" />
                <form action="">
                    <label htmlFor="">NAME</label>
                    <input type="text" name="" id="" placeholder='Enter your name...'/>

                    <label htmlFor="">LASTNAME</label>
                    <input type="text" name="" id="" placeholder='Enter your lastname...'/>

                    <label htmlFor="">EMAIL ADDRESS</label>
                    <input type="email" name="email" id="" placeholder='Enter your email address...'/>
                    <form >
                        <p>ENquiry type</p>
                        <select name="" id="">
                         <option value="Advertising">Advertising</option>
                    <option value="Partnerships/Business Development">Partnerships/Business Development</option>
                    <option value="Marketing">Marketingg</option>
                    <option value="Sales/Commercial">Sales/Commercial</option>
                    <option value="Press/Media">Press/Media</option>   
                        </select>
                    </form>
<form>
    <p>MESSAGES</p>
  <textarea name="message" id="" placeholder='Enter your message'></textarea>  
</form>

                   <input type="submit" /> 
                </form>
            </div>
            <Form/>
        </div>
    )
}
export default Contacts;