import React from 'react';
import { Card, Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedJobTypes } from '../features/listings/listingsSlice';

const FilterJobTypes = () => {
  const dispatch = useDispatch();
  const jobTypes = useSelector(state => state.listings.jobTypes);
  const selectedJobTypes = useSelector(state => state.listings.selectedJobTypes);

  const handleChange = (e) => {
    const jobType = e.target.value;
    const newSelectedJobTypes = e.target.checked
      ? [...selectedJobTypes, jobType]
      : selectedJobTypes.filter(j => j !== jobType);

    dispatch(setSelectedJobTypes(newSelectedJobTypes));
  };

  return (
    <Card title="İş Türleri" className="filter-card">
      {jobTypes.map(jobType => (
        <Checkbox 
          key={jobType}
          value={jobType}
          checked={selectedJobTypes.includes(jobType)}
          onChange={handleChange}
        >
          {jobType}
        </Checkbox>
      ))}
    </Card>
  );
};

export default FilterJobTypes;
