
import React, { useState } from 'react';

function StudentForm() {
  const [form, setForm] = useState({
    name: '',
    father_name: '',
    mobile: '',
    dob: '',
    receipt_number: '',
    admission_date: '',
    batch: '',
    fee: '',
    notes: '',
    photo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, photo: URL.createObjectURL(file) });
  };

  return (
    <form className="p-4 max-w-md mx-auto space-y-4">
      <input type="text" name="name" placeholder="Student's Name" onChange={handleChange} required /><br />
      <input type="text" name="father_name" placeholder="Father's Name" onChange={handleChange} required /><br />
      <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange} required /><br />
      <input type="date" name="dob" placeholder="dd-mm-yyyy" onChange={handleChange} /><br />
      <input type="text" name="receipt_number" placeholder="Receipt Number" onChange={handleChange} /><br />
      <input type="date" name="admission_date" placeholder="dd-mm-yyyy" onChange={handleChange} /><br />
      <select name="batch" onChange={handleChange}>
        <option value="">Select Batch</option>
        <option value="Batch A">Batch A</option>
        <option value="Batch B">Batch B</option>
      </select><br />
      <input type="number" name="fee" placeholder="Fee (Optional)" onChange={handleChange} /><br />
      <input type="text" name="notes" placeholder="Notes (Optional)" onChange={handleChange} /><br />
      <input type="file" accept="image/*" onChange={handlePhotoChange} /><br />
      {form.photo && <img src={form.photo} alt="Preview" width="100" />}
    </form>
  );
}

export default StudentForm;
