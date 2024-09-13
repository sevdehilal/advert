// src/components/FilterSectors.js
import React from 'react';
import { Card, Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSectors } from '../features/listings/listingsSlice';
import '../styles/FilterSectors.css'; // CSS dosyasını import et

const FilterSectors = () => {
  const dispatch = useDispatch();
  const sectors = useSelector(state => state.listings.sectors);
  const selectedSectors = useSelector(state => state.listings.selectedSectors);
  
  const handleChange = (e) => {
    const sector = e.target.value;
    const newSelectedSectors = e.target.checked
      ? [...selectedSectors, sector]
      : selectedSectors.filter(s => s !== sector);
    
    dispatch(setSelectedSectors(newSelectedSectors));
  };
  
  return (
    <Card title="Sektörler" className="filter-card">
      {sectors.map(sector => (
        <Checkbox 
          key={sector}
          value={sector}
          checked={selectedSectors.includes(sector)}
          onChange={handleChange}
        >
          {sector}
        </Checkbox>
      ))}
    </Card>
  );
};

export default FilterSectors;
