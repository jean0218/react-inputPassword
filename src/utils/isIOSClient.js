export function isIOSClient(){
    if (window.webkit && window.webkit.messageHandlers) {
        var bridgeHandler = window.webkit.messageHandlers.bridgeHandler;
        if (bridgeHandler) {
            console.log('bridge on IOS');
            return true;
        }
    }
    return false;
};