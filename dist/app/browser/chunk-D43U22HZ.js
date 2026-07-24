// src/models/hr-models.ts
var OrderStatus;
(function(OrderStatus2) {
  OrderStatus2[OrderStatus2["Pending"] = 1] = "Pending";
  OrderStatus2[OrderStatus2["Approved"] = 2] = "Approved";
  OrderStatus2[OrderStatus2["Rejected"] = 3] = "Rejected";
  OrderStatus2[OrderStatus2["Canceled"] = 4] = "Canceled";
})(OrderStatus || (OrderStatus = {}));
var OrderTypeId;
(function(OrderTypeId2) {
  OrderTypeId2[OrderTypeId2["Leave"] = 1] = "Leave";
  OrderTypeId2[OrderTypeId2["Overtime"] = 2] = "Overtime";
  OrderTypeId2[OrderTypeId2["BusinessTrip"] = 3] = "BusinessTrip";
  OrderTypeId2[OrderTypeId2["Course"] = 4] = "Course";
  OrderTypeId2[OrderTypeId2["ServiceCertificate"] = 5] = "ServiceCertificate";
  OrderTypeId2[OrderTypeId2["Other"] = 6] = "Other";
})(OrderTypeId || (OrderTypeId = {}));

export {
  OrderStatus,
  OrderTypeId
};
//# sourceMappingURL=chunk-D43U22HZ.js.map
