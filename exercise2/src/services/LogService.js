import axios from 'axios'

const LOGS_REST_API_URL_ALL = 'http://localhost:8080/records/log/all';
const LOGS_REST_API_URL_CLASS = 'http://localhost:8080/records/log/class/SampleClass0';


class LogService {

	getAllLogs() {
		return axios.get(LOGS_REST_API_URL_ALL);
	}

	getByDate() {
		
	}


}


export default new LogService();
