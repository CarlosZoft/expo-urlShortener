import React, { useState, useRef } from "react";
import { Picker } from "@react-native-picker/picker";

const SelectOptions = (props) => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    "Selecione uma opção"
  );
  const pickerRef = useRef();

  // function open() {
  //   pickerRef.current.focus();
  // }

  // function close() {
  //   pickerRef.current.blur();
  // }

  return (
    <Picker
      ref={pickerRef}
      selectedValue={selectedLanguage}
      onValueChange={(itemValue, itemIndex) =>
        itemValue ? setSelectedLanguage(itemValue) : selectedLanguage(0)
      }
      style={props.styles}
    >
      {props.fields.map((data, index) => (
        <Picker.Item label={data.name} value={data.value} key={index} />
      ))}
    </Picker>
  );
};

export default SelectOptions;
