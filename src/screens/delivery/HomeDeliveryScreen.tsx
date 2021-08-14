import React, { useRef, useState, useEffect } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useDispatch } from "react-redux";
import { getRouteParam, INavigationScreenProps } from "../../navigation";
import HomeHeader from "../../navigation/header/HomeHeader";
import { useAppSelector } from "../../store";
import { Colors } from "../../styles";
import NewOrder from "./components/NewOrder";
import { getOrder } from "../../store/actions/orders";
import { Label } from "../../components/commons";
const HomeDelivery: React.FC<INavigationScreenProps> = (props: any) => {
  const getParams = getRouteParam(props);
  const detail = getParams("detail", false);
  const data = useAppSelector((state) => {
    const item = state.orders.orderx;
    return item?.slice(item.length - 1);
  });
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const fetchOrders = async () => {
    try {
      setIsLoading(true);
      await dispatch(getOrder());
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
      <HomeHeader title="Delivery" disableIcon {...props} />
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator color={Colors.BASECOLOR} size="large" />
          <Label>Loading...</Label>
        </View>
      ) : (
        <FlatList
          data={[1]}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => {
            return <NewOrder {...item} detail={detail} />;
          }}
        />
      )}
    </View>
  );
};
export default HomeDelivery;
