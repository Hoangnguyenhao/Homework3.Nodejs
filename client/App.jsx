import { useState } from 'react';
import axios from 'axios';

function App() {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    age: '',
    address: ''
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3001/api/students', student);
      alert('Luu thong tin thanh cong');
      setStudent({ name: '', email: '', age: '', address: '' });
    } catch (err) {
      alert('Loi khi luu du lieu');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h2>Nhap thong tin sinh vien</h2>
      <input name="name" placeholder="Ten" value={student.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={student.email} onChange={handleChange} />
      <input name="age" placeholder="Tuoi" value={student.age} onChange={handleChange} />
      <input name="address" placeholder="Dia chi" value={student.address} onChange={handleChange} />
      <button onClick={handleSubmit}>Luu</button>
    </div>
  );
}

export default App;
