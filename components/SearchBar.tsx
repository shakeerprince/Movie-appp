import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props{
  placeholder: string;
  onPress: () => void;
}

/**
 * SearchBar component renders a search bar with a search icon, text input, and a placeholder.
 * 
 * Props:
 * - placeholder: string - The placeholder text for the search input field.
 * - onPress: function - A function to be called when the search bar is pressed.
 */

const SearchBar: React.FC<Props> = ({ placeholder, onPress }) => {
  return (
    <View className=' flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Image source={icons.search} className="size-5" 
      resizeMode="contain" tintColor="#ab8bff"/>
        <TextInput
         onPress={onPress}
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        placeholderTextColor="#a8b5db"
        className='flex-1 ml-2 text-white'
     >
        </TextInput>
      <Text>SearchBar</Text>
    </View>
  )
}

export default SearchBar