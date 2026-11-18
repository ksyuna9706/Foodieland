import cont from './Group 13936.webp'
import Form from '../../components/form/Form';
import './Contacts.css'

function Contacts() {

    return (
        <div className="wrap">
            <h2>Contact us</h2>
            <div className="form-contact" style={{ marginTop: '72px' }}>
                <img src={cont} alt="" />
                <form>
                    <div className="form-cont-1" style={{ marginLeft: '40px' }}>
                        <div className="row g-3">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" id="validationDefault01" style={{
                                    width: '400px'
                                    , marginBottom: '24px'
                                }} />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" id="validationDefault02" style={{
                                    width: '400px', marginBottom: '24px'
                                }} />
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Subject" aria-label="Subject" />
                            </div>
                            <div className="col">

                                <select className="form-select" aria-label="Default select example">
                                    <option >Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3" style={{ marginTop: '24px' }}>
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Messages</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </div>

                </form>
            </div>
        </div>


    )
}
export default Contacts;