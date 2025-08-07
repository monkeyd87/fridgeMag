import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function ScannerScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState('back');
  const [hit, setHit] = useState(null);

  const navigation = useNavigation();




  const fetchData = async(barcodeNum)=>{
    const res =  await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcodeNum}.json`)
    const json =  await  res.json()
    const data =  json.product
    const {product_name} = data
    return data
    
    
  }

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  const onScan = async ({ type, data }) => {
  if (!data) return;
  setHit({ type, data });
  console.log('Scanned', type, data);
  try {
    const product = await fetchData(data);
    navigation.navigate('Results', { product });
  } catch (err) {
    console.error("Failed to fetch product:", err);
  }
};

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        autofocus="on"
        barcodeScannerSettings={{ barcodeTypes: ['ean13', 'qr'] }}
        onBarcodeScanned={hit ? undefined : onScan}
      >
        {/* Square overlay */}
        <View style={styles.overlay}>
          <View style={styles.topMask} />
          <View style={styles.middleRow}>
            <View style={styles.sideMask} />
            <View style={styles.viewfinder} />
            <View style={styles.sideMask} />
          </View>
          <View style={styles.bottomMask} />
        </View>

        {/* Flip button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Results',{data:''})}>
            <Text style={styles.text}>Flip</Text>
          </TouchableOpacity>
        </View>
      </CameraView>

      {hit && (
        <View style={{ padding: 16, backgroundColor: 'white' }}>
          <Text>Type: {hit.type}</Text>
          <Text>Data: {hit.data}</Text>
          <Button title="Scan again" onPress={() => setHit(null)} />
        </View>
      )}
    </View>
  );
}

const { width } = Dimensions.get('window');
const overlayColor = 'rgba(0,0,0,0.5)';
const squareSize = width * 0.7;

const styles = StyleSheet.create({
  container: { flex: 1 },
  message: { textAlign: 'center', paddingBottom: 10 },
  camera: { flex: 1 },
  buttonContainer: { position: 'absolute', bottom: 40, width: '100%', alignItems: 'center' },
  button: { paddingVertical: 10, paddingHorizontal: 16, backgroundColor: '#000', borderRadius: 8 },
  text: { color: '#fff', fontWeight: 'bold' },
  overlay: { ...StyleSheet.absoluteFillObject },
  topMask: { flex: 1, backgroundColor: overlayColor },
  bottomMask: { flex: 1, backgroundColor: overlayColor },
  middleRow: { flexDirection: 'row', alignItems: 'center' },
  sideMask: { flex: 1, backgroundColor: overlayColor },
  viewfinder: { width: squareSize, height: squareSize, borderWidth: 2, borderColor: '#00FF00' },
});
