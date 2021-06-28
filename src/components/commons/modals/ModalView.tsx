import React, { createRef } from 'react';
import { Modal, StyleSheet, View, TouchableWithoutFeedback, FlatList } from 'react-native';
import { Colors } from '../../../styles';
import { HPADDING, PADDING, WTDP } from '../../../styles/scale';
import { FONT_SIZE_16 } from '../../../styles/Typography';
import { isIphoneX } from '../../../utils/platform';
import Button from '../buttons/Button';
import Label from '../labels/Label';
const MODAL_WIDTH = "95%";
const ITEM_PADDING = WTDP(4.5, 600);
const MAX_HEIGHT = ITEM_PADDING * ITEM_PADDING / 1.5;
const REDIUS = ITEM_PADDING / 1.5
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalView: {
    borderRadius: REDIUS,
    overflow: "hidden",
    width: MODAL_WIDTH,
    position: 'absolute',
    margin: WTDP(5, 600),
    backgroundColor: '#fff',
    maxHeight: MAX_HEIGHT,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  btnCancel: {
    borderRadius: REDIUS,
    width: MODAL_WIDTH,
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingVertical: PADDING
  },
  textCancel: {
    padding: HPADDING,
    color: Colors.BLUE,
    fontFamily: undefined,
    fontSize: FONT_SIZE_16,
  },
  item: {
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderBottomColor: "#ddd",
    paddingVertical: ITEM_PADDING,
  },
  itemText: {
    color: '#000',
    fontSize: FONT_SIZE_16
  },
  labelContainer: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    padding: ITEM_PADDING / 2
  },
  label: {
    alignSelf: "center",
    color: Colors.GRAY_DARK,
  }
});

interface ItemProps {
  key: number | string,
  value: string
}
interface IProps {
  data: any[],
  title: string,
  visible?: boolean
  onVisible?: () => void
  onSelect: (item: ItemProps) => void
  animationType?: "slide" | "none" | "fade"
};

export default function ModalView({
  data,
  title,
  onSelect,
  onVisible,
  visible: modaleVisible,
  animationType = "slide"
}: IProps) {
  const modalRef = createRef<Modal>();
  const iphoneX = isIphoneX();
  const modalStyle = {
    bottom: iphoneX ? WTDP(16, 600) : WTDP(12, 600),
  };
  const btnStyle = {
    bottom: iphoneX ? WTDP(6, 600) : WTDP(2, 600)
  }
  const renderButton = () => {
    return (
      <Button
        bold
        title="Cancel"
        textStyle={styles.textCancel}
        style={[styles.btnCancel, btnStyle]}
        onPress={onVisible}
      />
    )
  };
  const renderItems = ({ item }: { item: ItemProps }) => {
    return (
      <Button
        title={item.value}
        textStyle={styles.itemText}
        style={styles.item}
        onPress={() => onSelect(item)}
      />
    )
  }
  return (
    <Modal
      ref={modalRef}
      transparent={true}
      visible={modaleVisible}
      animationType={animationType}
    >
      <TouchableWithoutFeedback onPress={onVisible}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, modalStyle]}>
            <View style={styles.labelContainer}>
              <Label style={styles.label}>{title}</Label>
            </View>
            <FlatList
              data={data}
              keyExtractor={(_, i) => i.toString()}
              renderItem={renderItems}
              showsVerticalScrollIndicator={false}
            />
          </View>
          {renderButton()}
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}