import React from 'react';
import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setLocation,
  toggleEquipment,
  toggleVehicleType,
} from 'store/filterSlice';
import { IconSVG } from 'components/Icon/Icon';
import { selectFilter } from 'store/selector';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterState = useSelector(selectFilter) || {};
  const {
    location = '',
    selectedEquipment = [],
    selectedVehicleType = [],
  } = filterState;

  const equipmentOptions = [
    { id: 'airConditioner', label: 'AC', icon: 'airConditioner' },
    { id: 'kitchen', label: 'Kitchen', icon: 'kitchen' },
    { id: 'TV', label: 'TV', icon: 'TV' },
    { id: 'shower', label: 'Shower/WC', icon: 'shower' },
    { id: 'automatic', label: 'Automatic', icon: 'automatic' },
  ];

  const vehicleTypeOptions = [
    { id: 'van', label: 'Van', icon: 'van' },
    {
      id: 'fullyIntegrated',
      label: 'Integrated',
      icon: 'fully-Integrated',
    },
    { id: 'alcove', label: 'Alcove', icon: 'alcove' },
  ];

  const handleLocationChange = e => {
    dispatch(setLocation(e.target.value));
  };

  const handleEquipmentChange = option => {
    dispatch(toggleEquipment(option.id));
  };

  const handleVehicleTypeChange = option => {
    dispatch(toggleVehicleType(option.id));
  };

  return (
    <div className={styles.filters}>
      <div className={styles.locationContainer}>
        <p>Location</p>
        <div className={styles.inputWrapper}>
          <div className={styles.icon}>
            <IconSVG name="MapPin" size={20} />
          </div>
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            className={styles.locationInput}
            placeholder="Kyiv, Ukraine"
          />
        </div>
      </div>
      <div className={styles.filtersSection}>
        <h3>Filters</h3>
        <div className={styles.vehicleEquipment}>
          <h4 className={styles.title}> Vehicle equipment</h4>
          <hr className={styles.line} />
          <div className={styles.equipmentIconsContainer}>
            <div className={styles.equipmentIcons}>
              {equipmentOptions.map(option => (
                <div
                  key={option.id}
                  className={`${styles.iconContainer} ${
                    selectedEquipment.includes(option.id) ? styles.selected : ''
                  }`}
                  onClick={() => handleEquipmentChange(option)}
                >
                  <IconSVG name={option.icon} size={32} />
                  <span>{option.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.vehicleType}>
          <h4 className={styles.title}>Vehicle type</h4>
          <hr className={styles.title} />
          <div className={styles.typeIconsContainer}>
            <div className={styles.typeIcons}>
              {vehicleTypeOptions.map(option => (
                <div
                  key={option.id}
                  className={`${styles.iconContainer} ${
                    selectedVehicleType.includes(option.id)
                      ? styles.selected
                      : ''
                  }`}
                  onClick={() => handleVehicleTypeChange(option)}
                >
                  <IconSVG name={option.icon} size={32} />
                  <span>{option.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
