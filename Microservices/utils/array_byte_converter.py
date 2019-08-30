import numpy as np

def np_array_to_bytes(np_array):
    try:
        shape = np_array.shape
        bytes_string = np_array.tobytes()
        data_type = np_array.dtype.str
        return bytes_string, shape, data_type
    except Exception as e:
        print('[Error] core.cv_utils.np_array_to_bytes() exception : ', e)
        print('Numpy to bytes conversion Error')
    return None, None, None


def bytes_to_np_array(bytes_string, shape, dtype=float):
    try:
        np_array = np.frombuffer(bytes_string, dtype=dtype)
        np_array = np.reshape(np_array, shape)
        return np_array
    except Exception as e:
        print('[Error] core.cv_utils.bytes_to_np_array() exception : ', e)
        print('Bytes to numpy conversion Error')
    return None
