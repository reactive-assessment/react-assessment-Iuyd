import React, {useState} from 'react';
import Captcha from './captcha';

const Component = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', comment: '', token: new Date().toJSON()
  });

  const onInputChange = ({target}) => {
    const fieldName = target.getAttribute('name');
    const value = target.value;
    setFormData({...formData, [fieldName]: value});
  };

  return (
    <section>
      <h1>Contact Us</h1>
      <form>
        <table>
          <tfoot>
          <tr>
            <td>Captcha Token</td>
            <td><Captcha token={formData.token}/></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <br />
              <button>Submit</button>
            </td>
          </tr>
          </tfoot>
          <tbody>
          <tr>
            <td>Name</td>
            <td><input type="text" name="name" value={formData.name} onChange={onInputChange}/></td>
          </tr>
          <tr>
            <td>Email</td>
            <td><input type="text" name="email" value={formData.email} onChange={onInputChange}/></td>
          </tr>
          <tr>
            <td style={{verticalAlign: 'top'}}>Comment</td>
            <td><textarea cols={60} rows={3} name="comment" value={formData.comment} onChange={onInputChange}></textarea></td>
          </tr>
          </tbody>
        </table>
      </form>
    </section>)
};

export default Component;