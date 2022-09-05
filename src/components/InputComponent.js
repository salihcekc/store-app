import React from 'react';

function InputComponent({value, name, type, placeHolder, onChange, label}) {
  return (
    <div>
      <div style={styles.group}>
        <label style={{width: '50%'}}> {label} </label>
        <input type={type} value={value} name={name} placeholder={placeHolder} onChange={onChange} />
      </div>
    </div>
  );
}

export default InputComponent;

const styles = {
  // group: {
  //   height: '100%',
  //   width: '100%',
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
};
