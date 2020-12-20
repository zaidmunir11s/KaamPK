import { Dimensions, PixelRatio } from 'react-native';
let { width, height } = 0

const widthToDp = number => {
    let givenWidth =
        typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((Dimensions.get('window').width * givenWidth) / 100)

};
const heightToDp = number => {
    let givenHeight =
        typeof number === 'number' ? number : parseFloat(number);
    const obj = PixelRatio.roundToNearestPixel((Dimensions.get('window').height * givenHeight) / 100)

    return obj

};
const listenToOrientation = ref => {
    Dimensions.addEventListener('change', newDimension => {
        width = Dimensions.get('window').width;
        height = Dimensions.get('window').height;
        console.log(width)


    })
    ref.setState({ orientation: height > width ? 'portrait' : 'landscape' })
}
const removeOrientation = () => {
    Dimensions.removeEventListener('change')

}
export { widthToDp, heightToDp, listenToOrientation, removeOrientation };
