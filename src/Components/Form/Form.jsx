import './Form.css';
import { useState, useMemo } from 'react';
import { Datepicker } from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import * as moment from 'moment';

const Form = (props) => {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [allDay, setAllDay] = useState(false);
  const [event, setEvent] = useState('');
  const [room, setRoom] = useState('Select class...');
  const [school, setSchool] = useState('Select Faculty...');
  const [eventDesc, setEventDesc] = useState('');
  const [startDate, setStartDate] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));
  // const [endDate, setEndDate] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const controls = useMemo(() => (allDay ? ['date'] : ['datetime']));

  const controlChange = (e) => {
    setAllDay(e.target.checked);
  };

  const onSelectDate = (e) =>{
    setStartDate(e.value);
  }
  
    // console.log(startDate);
  const handleSubmit = (e) =>{
    e.preventDefault();
    props.submit(event,school,room,startDate,eventDesc);
    setEventDesc('');
    setRoom('Select Class...');
    setSchool('Select Faculty...');
    setEvent('');
    // setStartDate('');
  }
  const now = new Date();
  const min = now;
  const max = new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
  return (
    <div className='form-div'>
      <form className='calendar-form' onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-75'>
            <input
              type='text'
              name='event'
              id='event'
              placeholder='Enter event...'
              required
              value={event}
              onChange={(e) => {
                setEvent(e.target.value);
              }}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-75'>
            <select
              className='class'
              id='class'
              name='class'
              required
              value={room}
              onChange={(e) => {
                setRoom(e.target.value);
              }}
            >
              <option disabled hidden value={null}>
                Select class...
              </option>
              <option value='Medical Labs'>Medical Labs</option>
              <option value='Agriculture Labs'>Agriculture Labs</option>
              <option value='Main Labs'>Main Labs</option>
              <option value='Hall A'>Hall A</option>
              <option value='Hall B'>Hall B</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='col-75'>
            <select
              className='faculty'
              id='faculty'
              name='faculty'
              required
              value={school}
              onChange={(e) => {
                setSchool(e.target.value);
              }}
            >
              <option disabled hidden value={null}>
                Select Faculty...
              </option>
              <option value='School of Medicine'>School of Medicine</option>
              <option value='School of Agriculture'>
                School of Agriculture
              </option>
              <option value='School of Computing'>School of Computing</option>
              <option value='School of Engineering'>
                School of Engineering
              </option>
              <option value='School of Business'>School of Business</option>
              <option value='School of Nursing'>School of Nursing</option>
              <option value='School of Archturial Sciences'>
                School of Archturial Sciences
              </option>
              <option value='School of Sciences'>School of Sciences</option>
              <option value='School of Arts'>School of Arts</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='col-75'>
            <div className='checkbox'>
              <input
                type='checkbox'
                name='all-day'
                id='all-day'
                defaultValue={allDay}
                onChange={controlChange}
              />
              <label htmlFor='all-day'>All day</label>
            </div>
          </div>
        </div>
        <div className='row'>
          <Datepicker
            controls={controls}
            select='range'
            startInput={start}
            endInput={end}
            min={min}
            max={max}
            value={startDate}
            onChange={onSelectDate}
          />
          <div className='col-75'>
            <input
              ref={setStart}
              name='start-date'
              id='start-date'
              required
              className='date'
              placeholder='Event start'
            />
            <input
              ref={setEnd}
              name='end-date'
              id='end-date'
              required
              className='date'
              placeholder='Event end'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-75'>
            <input
              type='text'
              name='event-desc'
              id='event-desc'
              placeholder='Notes, Description, URL... '
              value={eventDesc}
              onChange={(e) => {
                setEventDesc(e.target.value);
              }}
            />
          </div>
        </div>
        <div className='row'>
          <input type='submit' defaultValue='SUBMIT' />
        </div>
      </form>
    </div>
  );
};

export default Form;
