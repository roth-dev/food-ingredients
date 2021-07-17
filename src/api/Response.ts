
import assets from "../assets";
import Colors from "../styles/Colors";
import { Icons } from "../components/commons/fontawesome";
import { Language } from "../libs/Language";

export default {
    data: (status: number) => {
        switch (status) {
            case 204: 
                return {
                    title: Language.Error["No Data Available"],
                    message: Language.Error["Sorry about that. It seems like there is nothing you are looking for."],
                }
            case 404:
                return {
                    dev: '404 Not Found',
                    title: `Oops! ${Language.Error["Something went wrong"]}`,
                    message: Language.Error["The request url not found on the server. That's all we know."]
                };
            case 408:
                return {
                    dev: '408 Request Timeout',
                    title: Language.Error["No Internet Connection"],
                    message: Language.Error["Slow or no internet connection, Check you Internet settings."]
                };
            case 500:
                return {
                    dev: '500 Internal Server Error',
                    title: `Oops! ${Language.Error["Something went wrong"]}`,
                    message: Language.Error["This may be because of a technical error that we're working to get fixed. Try to reloading this page."]
                };
        }
    },

    type: (type: string) => {
        switch (type.toLowerCase()) {
            case 'success': 
                return {
                    icon: Icons.check,
                    color: Colors.SUCCESS
                };
            case 'error': 
                return {
                    icon: Icons.times,
                    color: Colors.ERROR
                };
            case 'warning': 
                return {
                    icon: Icons.exclamation,
                    color: Colors.WARNING
                };
            case 'unknown': 
                return {
                    icon: Icons.frown,
                    color: Colors.UNKNOWN
                };
            case 'network': 
                return {
                    icon: Icons.wifi,
                    color: Colors.NETWORK
                };
            default: 
                return {
                    icon: Icons.infoCircle,
                    color: Colors.PRIMARY,
                }
        }
    },

    asset: (status: number) => {
        switch (status) {
            case 100: 
                return {
                    color: '#59bfc6',
                    icon: Icons.frown,
                    source: assets.DATA_EMPTY
                };
            // Found or Success
            case 200: 
                return {
                    icon: Icons.checkCircle,
                    color: Colors.SUCCESS,
                };
            // Created
            case 201: 
                return {
                    icon: Icons.plusCircle,
                    color: Colors.SUCCESS,
                };
            // Accepted
            case 202: 
                return {
                    icon: Icons.voteYea,
                    color: Colors.SUCCESS,
                };
            // No Content or No Data
            case 204: 
                return {
                    icon: Icons.clipboardList,
                    color: Colors.PRIMARY,
                    source: assets.LIST_EMPTY
                };
            // Bad Request
            case 400: 
                return {
                    icon: Icons.angry,
                    color: Colors.ERROR,
                };
            // Unauthorized
            case 401: 
                return {
                    icon: Icons.frown,
                    color: Colors.ERROR,
                };
            // Payment Required 
            case 402:
                return {
                    icon: Icons.wallet,
                    color: Colors.ERROR,
                };
            // Invalid Data
            case 403: 
                return {
                    icon: Icons.frown,
                    color: Colors.ERROR,
                };
            
            // Not Found
            case 404:
                return {
                    icon: Icons.meh,
                    color: Colors.ERROR,
                    source: assets.SEARCH_EMPTY
                };
            // Not Accepted
            case 406:
                return {
                    icon: Icons.voteNay,
                    color: Colors.ERROR,
                };
            // No Internet
            case 408:
                return {
                    icon: Icons.wifi,
                    color: Colors.NETWORK,
                    source: assets.NETWORK_EMPTY
                };
            // Conflict Request
            case 409:
                return {
                    icon: Icons.surprise,
                    color: Colors.ERROR,
                };
            // Internal Server Error
            default:
                return {
                    icon: Icons.dizzy,
                    color: Colors.UNKNOWN,
                    source: assets.UNKNOWN_ERROR
                };
        }
    }
}