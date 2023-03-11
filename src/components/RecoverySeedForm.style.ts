import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const INPUT_FIELD_SIZE = SCREEN_WIDTH * 0.15;
const INPUT_CONTAINER_HEIGHT = SCREEN_WIDTH * 0.4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    height: INPUT_CONTAINER_HEIGHT,
  },
  inputField: {
    flexBasis: SCREEN_WIDTH * 0.25,
    flexGrow: 0,
    height: INPUT_FIELD_SIZE,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    marginRight: 10,
    marginBottom: 10,
    fontSize: INPUT_FIELD_SIZE * 0.5,
  },
  instructionText: {
    marginVertical: 20,
    fontSize: SCREEN_WIDTH * 0.08,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: 'transparent',
    borderColor: '#2196F3',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: '#2196F3',
    fontSize: 18,
  },
  addressBalanceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    
  },
  modalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  modalValue: {
    fontSize: 16,
    flex: 1,
  },
  modalButton: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});


export default styles;
