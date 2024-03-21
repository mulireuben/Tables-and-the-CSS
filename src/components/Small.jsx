import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { FaRegCircleUser } from 'react-icons/fa6';
import { FaUserLarge } from 'react-icons/fa6';
import { CiSearch } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

const patients = [
  {
    PatientNo: 'SMN 0009-23',
    PatientName: 'reuben muster',
    Registrationdate: '23-3-2024',
    Primarycontact: 'tempo debun',
    Residence: 'BAMBA',
    status: 'active',
  },
  {
    PatientNo: 'SMN 0009-24',
    PatientName: 'stepehen brian',
    Registrationdate: '24-3-2024',
    Primarycontact: 'costa dares',
    Residence: 'KITOSI',
    status: 'active',
  },
  {
    PatientNo: 'SMN 0009-25',
    PatientName: 'Jeremy richard',
    Registrationdate: '24-3-2024',
    Primarycontact: 'nesty pron',
    Residence: 'IKUU',
    status: 'active',
  },
  {
    PatientNo: 'SMN 0009-27',
    PatientName: 'Michael Owen',
    Registrationdate: '24-3-2024',
    Primarycontact: 'cret part',
    Residence: 'TWAPA',
    status: 'active',
  },
  {
    PatientNo: 'SMN 0009-28',
    PatientName: 'Emmily achieng',
    Registrationdate: '24-3-2024',
    Primarycontact: 'crown puty',
    Residence: 'TWALA',
    status: 'active',
  },
  {
    PatientNo: 'SMN 0009-29',
    PatientName: 'Mutaga kahuhi',
    Registrationdate: '24-3-2024',
    Primarycontact: 'clar mind',
    Residence: 'MUSYI',
    status: 'active',
  },
  {
    PatientNo: 'SMN 0009-30',
    PatientName: 'Robert limeu',
    Registrationdate: '24-3-2024',
    Primarycontact: 'goal dbit',
    Residence: 'KATOO',
    status: 'active',
  },
  {
    PatientNo: 'SMN 0009-31',
    PatientName: 'Michael odundo',
    Registrationdate: '24-3-2024',
    Primarycontact: 'stret ebun',
    Residence: 'PARIS',
    status: 'active',
  },
  {
    PatientNo: 'SMN 0009-32',
    PatientName: 'Doreen mutiso',
    Registrationdate: '24-3-2024',
    Primarycontact: 'start kiv',
    Residence: 'VENUS',
    status: 'active',
  },
  // Add more patient data here
];

// Define the patientstable component separately
const PatientTable = (
  <table className='patient-table' style={{ marginTop: '10px' }}>
    <thead>
      <tr className='main-row'>
        <th></th>
        <th>Patient No</th>
        <th>Patient Name</th>
        <th>Registration Number</th>
        <th>Primary Contact</th>
        <th>Residence</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {patients.map((patient, index) => (
        <tr key={index}>
          <td>
            <FaRegCircleUser />
          </td>
          <td>{patient.PatientNo}</td>
          <td>{patient.PatientName}</td>
          <td>{patient.Registrationdate}</td>
          <td>{patient.Primarycontact}</td>
          <td>{patient.Residence}</td>
          <td>
            <div className='stato'>{patient.status}</div>
          </td>
          <td>
            {
              <button>
                Action{' '}
                <IoIosArrowDown style={{ fontSize: '10px', color: 'red' }} />
              </button>
            }
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const Small = () => {
  const navigate = useNavigate();
  const tableRows = useMemo(() => generateTableRows(patients), [patients]);
  return (
    <div className='container'>
      <div className='input-with-select'>
        <input type='text' id='1' placeholder='' readOnly />
        <select>
          <option value='option1'>active</option>
          <option value='option2'>inactive</option>
        </select>
      </div>
      <div className='another-div'>
        <input type='text' id='' placeholder='' readOnly />
        <select>
          <option value='option1'>present</option>
          <option value='option2'>absent</option>
        </select>
      </div>
      <div className='another-div3'>
        <input type='text' id='' placeholder='search patient' readOnly />
      </div>
      <div>
        <button
          className='patient-button'
          onClick={() => navigate('/patients-form')}
        >
          <FaUserLarge style={{ color: 'white' }} />
          New Patient
        </button>
      </div>
      {PatientTable}
    </div>
  );
};

export default Small;
