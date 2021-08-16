import React from 'react'
import { View, Text , select} from 'react-native'

const SelectOptions = (props) => {
  console.log(props)
  return (
    <View>
      <select>
          {
            props.fields.map((field, index) => {
              return (<option key={index} value={field.value}>{field.name}</option>)
            })
          }
      </select>
    </View>
  )
}

export default SelectOptions
