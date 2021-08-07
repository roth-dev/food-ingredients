import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useDispatch } from "react-redux";
import { Button, ExpoIcons, Label } from "../../components/commons";
import { Products } from "../../models/products";
import { getRouteParam, INavigationScreenProps } from "../../navigation";
import { navigate } from "../../navigation/navigation";
import { useAppSelector } from "../../store";
import { addToCart } from "../../store/actions/cart";
import { Colors, Themes } from "../../styles";
import { HPADDING, PADDING } from "../../styles/scale";
import { FONT_SIZE_16, FONT_SIZE_22 } from "../../styles/Typography";
import Validate from "../../utils/validate";
import Items from "./component/Items";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  footer: {
    padding: PADDING,
    justifyContent: "space-between",
  },
  btn: {
    flex: 1,
    backgroundColor: "#36323B",
  },
  btnTitle: {
    padding: HPADDING,
    fontSize: FONT_SIZE_16,
  },
  price: {
    flex: 1,
    textAlign: "center",
    fontSize: FONT_SIZE_22,
  },
});

interface ProductDetailScreenProps extends INavigationScreenProps {}

const ProductDetailScreen: React.FC<ProductDetailScreenProps> = (props) => {
  const getParams = getRouteParam(props);
  const title = getParams("title", null);
  const prodId = getParams("prodId", null);
  const catId = getParams("catId", null);
  const [qty] = useState<number>(1);
  const dispatch = useDispatch();
  const data = useAppSelector((state) => {
    const category = state.categories.categories?.filter(
      (cat) => cat.id === catId
    )[0];
    return category?.products?.filter((item) => item.id === prodId);
  });
  useEffect(() => {
    props.navigation.setOptions({
      title: title,
      headerRight: () => (
        <ExpoIcons
          style={{
            marginRight: PADDING,
          }}
          size={22}
          type="Feather"
          name="search"
          color={Colors.BASECOLOR}
          onPress={() => navigate("Search")}
        />
      ),
    });
  }, []);
  const _onAddToCart = () => {
    const cartItems = {
      ...data[0],
      qty: qty,
    };
    dispatch(addToCart(cartItems));
  };
  const renderItem = ({ item }: { item: Products }) => {
    return <Items {...item} />;
  };
  const renderButton = () => {
    return (
      <View style={[Themes.ROW, Themes.SHADOW, styles.footer]}>
        <Button
          bold
          style={styles.btn}
          title="Add to cart"
          textStyle={styles.btnTitle}
          onPress={_onAddToCart}
        />
        <Label bold style={styles.price}>
          $ {Validate.round(Validate.getCurrency(data[0].price), 3).toFixed(2)}
        </Label>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
      {renderButton()}
    </View>
  );
};
export default ProductDetailScreen;
