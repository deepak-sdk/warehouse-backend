import express from "express";
import { MongoClient } from 'mongodb'


const app = express();


const PORT = 7000;

const warehouse = [
  {
    id: "7",
    name: "Warehouse-234",
    code: "C-425",
    city: "Bangalore",
    space_available: 36,
    type: "TC89145",
    cluster: "cluster_14",
    is_registered: true,
    is_live: false,
  },
  {
    id: "8",
    name: "Warehouse-23455",
    code: "W-00008",
    city: "Bangalore",
    space_available: 3456,
    type: "Warehouse Service",
    cluster: "cluster-a-21",
    is_registered: true,
    is_live: true,
  },
  {
    id: "9",
    name: "Warehouse-6457",
    code: "W-00009",
    city: "Bangalore",
    space_available: 1234545,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: true,
    is_live: false,
  },
  {
    id: "10",
    name: "Warehouse-32456",
    code: "W-000010",
    city: "Guwahati",
    space_available: 121234,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: true,
    is_live: true,
  },
  {
    id: "12",
    name: "Warehouse-4567",
    code: "W-000012",
    city: "Indore",
    space_available: 97,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: true,
    is_live: true,
  },
  {
    id: "13",
    name: "Warehouse-458",
    code: "W-000013",
    city: "Delhi",
    space_available: 654,
    type: "Leasable Space",
    cluster: "cluster-a-1",
    is_registered: true,
    is_live: false,
  },
  {
    id: "14",
    name: "Warehouse-234",
    code: "C-425",
    space_available: 36,
    type: "TC8914",
    cluster: "cluster_14",
    is_registered: false,
    is_live: false,
    city: "Bangalore",
  },
  {
    id: "16",
    name: "Warehouse-123",
    code: "C-0956",
    space_available: "348",
    type: "Narrow-type",
    cluster: "Cluster-073",
    is_registered: false,
    is_live: false,
    city: "Velachery",
  },
];

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/warehouse", (req, res) => {
    // request => query.params
    console.log(req.query)
    const { city, cluster } = req.query;

    let warehousesResult = warehouse;

    if (city) {
        warehousesResult = warehousesResult.filter((mv) => mv.city === city)
    }
    if (cluster) {
        warehousesResult = warehousesResult.filter((mv)=> mv.cluster === cluster)
    }
  res.send(warehousesResult);
});

app.get("/warehouse/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
    // const warehouseData = warehouse.filter((mv) => mv.id === id)[0];
    const warehouseData = warehouse.find((mv) => mv.id === id);
//   console.log(warehouseData);

  warehouseData ? res.send(warehouseData) : res.status(404).res.send({ message: "NOT Found" });
});


  
app.listen(PORT, () => console.log("server started"));
