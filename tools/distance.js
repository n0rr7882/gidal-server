module.exports = function (loc1, loc2) {
    var R = 6371; // km
    var dLat = (loc2.latitude - loc1.latitude) * Math.PI / 180;
    var dLon = (loc2.longitude - loc1.longitude) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(loc1.latitude * Math.PI / 180) * Math.cos(loc2.latitude * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
}