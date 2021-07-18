import React, { createRef, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Button, Icons, Input } from '../../components/commons'
import { goBack, navigate } from '../../navigation/navigation'
import { Colors, Themes } from '../../styles'
import { HPADDING, PADDING } from '../../styles/scale'
import { FONT_SIZE_16, FONT_SIZE_18, FONT_SIZE_22 } from '../../styles/Typography'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header_search: {
    // height: HEADER,
    padding: PADDING,
    backgroundColor: Colors.WHITE,
    justifyContent: "space-between"
  },
  btn_left: {
    flex: 0,
    backgroundColor: "transparent",

  },
  input: {
    flex: 1,
    borderColor: Colors.BASECOLOR,
    borderRadius: 10,
    borderWidth: 1
  },
  search_icon: {
    color: Colors.BASECOLOR,
    fontSize: FONT_SIZE_18
  },
  btn_icon: {
    width: "auto",
    marginRight: 0,
    fontSize: FONT_SIZE_22,
    color: Colors.BASECOLOR
  }

})

interface SearchScreenProps {

}

const SearchScreen: React.FC<SearchScreenProps> = (props) => {
  const searchInputRef = createRef<TextInput>()
  useEffect(() => {
    searchInputRef.current?.focus()
  }, [])
  const renderHeaderSearch = () => {
    return (
      <View style={[Themes.ROW, styles.header_search]}>
        <Button
          onPress={() => goBack()}
          style={[styles.btn_left, { marginRight: HPADDING }]}
          leftIcon={Icons.chevronLeft}
          iconStyle={styles.btn_icon}
        />
        <Input
          style={styles.input}
          textStyle={{ fontSize: FONT_SIZE_16 }}
          reference={searchInputRef}
          leftIcon={Icons.search}
          iconStyle={styles.search_icon}
          placeholder="Search..."
        />
        <Button
          onPress={() => navigate("Notification")}
          style={styles.btn_left}
          rightIcon={Icons.bell}
          iconStyle={[styles.btn_icon, { color: "#20D0C4" }]}
        />
      </View>
    )

  }
  return (
    <View style={styles.container}>
      {renderHeaderSearch()}
      <FlatList
        data={[1]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={() => {
          return (
            <View>
              <Text> Hello</Text>
            </View>
          )
        }}
      />
    </View>
  );
}
export default SearchScreen