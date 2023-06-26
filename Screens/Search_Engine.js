import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import { COLOURS } from '../ThemeColour/Theme';

const data = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Another Item' },
  { id: 4, title: 'Something Else' },
  { id: 5, title: 'Another Item 2' },
];

const Search_Engine = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredData = data.filter(item => item.title.includes(query));
    setSearchResults(filteredData);
  };

  const renderItem = ({ item }) => <Text>{item.title}</Text>;

  return (
    <View style={{backgroundColor:COLOURS.grey, height:'100%'}}>
      <TextInput
        placeholder="Search..."
        placeholderTextColor={'grey'}
        style={{borderWidth:1, borderColor:'#000'}}
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={searchResults}
        style={{color:COLOURS.black}}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Search_Engine;
