import React from 'react';
import './Body.css';
import { useNavigate } from 'react-router-dom';
import { GrAdd } from 'react-icons/gr';

const Body = () => {
  const navigate = useNavigate();
  return (
    <div className='mainy-container'>
      <div className='statu'>
        <label for=''>*status:</label>
        <select>
          <option value='option1'>active</option>
          <option value='option2'>inactive</option>
        </select>
        <h1 className='' style={{ fontSize: 17 }}>
          Basic Info
        </h1>
        {/* <div className='clicks'>
          <button>clear</button>
          <button>back</button>
        </div> */}
      </div>
      <div className='box'>
        <div className='combi'>
          <div className='combi-2'>
            <div className='thatone'>
              <label for='text'>
                Patient Name:
                <div className='name-div' style={{}}>
                  <div className='top'>
                    <select className='title-select'>
                      <option value='option1'>mr</option>
                      <option value='option2'>mrs</option>
                    </select>
                    <input
                      type='text'
                      id='text '
                      placeholder='given name'
                      style={{ borderRadius: 5 }}
                      className='given-name-input'
                    />
                  </div>
                  
                    <input
                      type='text'
                      id='text'
                      placeholder='Middle Age'
                      style={{ borderRadius: 5 }}
                    />
                    <input
                      type='text'
                      id='text'
                      placeholder='surname'
                      style={{ borderRadius: 5 }}
                    />
                  
                </div>
              </label>
            </div>
            <div className='initial'>
              <label for='name'>
                Alias Name:
                <input type='text' id='' placeholder='Alias Name' />
              </label>
              <label for='text'>
                Gender:
                <input type='text' id='' placeholder='' />
              </label>

              <label for='name'>
                Blood Type
                <input
                  type='text'
                  id=''
                  placeholder=''
                  // style={{ padding: 20, marginBottom: 10, borderRadius: 5 }}
                />
              </label>
            </div>
          </div>
          <div className='stem'>
            <label for='' style={{ opacity: 0 }}>
              <input
                type=''
                placeholder='patient image'
                style={{ color: 'black' }}
              />
            </label>
          </div>
        </div>

        <div className='more'>
          <div className='portion1'>
            <label for='text'>
              Age:
              <input type='number' />
            </label>
            <label for='date'>
              Date of Birth
              <input type='date' id='' placeholder='D.O.B' />
            </label>
            <label for='text'>
              Marital Status:
              <input type='text' placeholder='' />
            </label>
            <label for='name'>
              ID NO / PASSPORT NO.:
              <input
                type='number'
                placeholder='nationality/military/Birth cert'
              />
            </label>
          </div>
          <div className='portion2'>
            <label for='number'>
              Primary Contact
              <input type='number' placeholder='Contact' />
            </label>

            <label for=''>
              Residence
              <input type='text' />
            </label>

            <label for='name'>
              Religion:
              <input type='text' placeholder='Not Specified' />
            </label>

            <label for=''>
              Nationality
              <input type='text' />
            </label>
          </div>
        </div>
        <div className='hobbies'>
          <label for='text'>
            Occupation:
            <select>
              <option value='' hidden>
                select occupation:
              </option>
              <option value='option 1'>swimming</option>
              <option value='option 1'>teaching</option>
            </select>
          </label>
          <label for='text'>
            Knew Us Through:
            <input
              type='text'
              placeholder='select knew about us through'
              readOnly
            />
          </label>
        </div>
        <div className='lastly'>
          <label for='name'>
            County
            <input type='text' placeholder='Select County' readOnly />
          </label>
          <label for='name'>
            Constituences:
            <input type='text' placeholder='select constituency' readOnly />
          </label>{' '}
          <label for='name'>
            Ward <input type='text' placeholder='select ward' readOnly />
          </label>
        </div>
      </div>
      <div className='clicks'>
        <button className='clearing'>clear</button>
        <button className='exiting' onClick={() => navigate(-1)}>
          back
        </button>
      </div>
    </div>
  );
};

export default Body;
