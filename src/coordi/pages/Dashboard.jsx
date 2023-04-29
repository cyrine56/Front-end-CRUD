import {
  
    ShoppingCartOutlined,
    UserOutlined,
    ToolOutlined,
  } from "@ant-design/icons";
  import { Card, Space, Statistic, Table, Typography } from "antd";
  import { useEffect, useState } from "react";
  import {  Tag } from 'antd';
  import { getReclam, getEquipment, getClient, getTechnicien } from "../../components/API";
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  function Dashboard() {
    const [technicien, setTechnicien] = useState(0); //manquante en backend 
    const [client, setClient] = useState(0);
    const [reclams, setReclam] = useState(0);
    const [equipement, setEquipment] = useState(0);
  
    useEffect(() => {
      getReclam().then((res) => {
        setReclam(res);
        console.log(res);
      });
      getEquipment().then((res) => {
        setEquipment(res);
        console.log(res);
      });
      getClient().then((res) => {
        setClient(res);
        console.log(res);
      });
    }, []);
  
    return (
      <Space size={20} direction="vertical" className="container p-5 text-center">
          <h1 className="text-center" style={{color:"#25064e"}}>Coordinatrice de service</h1>
        <Space direction="horizental">
        <DashboardCard
    icon={
      <ShoppingCartOutlined
        style={{
          color: "green",
          backgroundColor: "black",
          borderRadius: 20,
          fontSize: 24,
          padding: 8,
        }}
      />
    }
    title={"Réclamation"}
    value={reclams}
  />
  <DashboardCard
    icon={
      <ToolOutlined
        style={{
          color: "blue",
          backgroundColor: "black",
          borderRadius: 20,
          fontSize: 24,
          padding: 8,
        }}
      />
    }
    title={"Technicien"}
    value={technicien}
  />
  <DashboardCard
    icon={
      <UserOutlined
        style={{
          color: "purple",
          backgroundColor: "black",
          borderRadius: 20,
          fontSize: 24,
          padding: 8,
        }}
      />
    }
    title={"Client"}
    value={client}
  />
  <DashboardCard
    icon={
      <ToolOutlined
        style={{
          color: "gray",
          backgroundColor: "black",
          borderRadius: 20,
          fontSize: 24,
          padding: 8,
        }}
      />
    }
    title={"Equipement"}
    value={equipement}
  />
        </Space>
        <Space>
          <RecentOrders />
          <DashboardChart />
        </Space>
      </Space>
    );
  }
  
  function DashboardCard({ title, value, icon }) {
    return (
      <Card>
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    );
  }
  function RecentOrders() {
    const [dataSource, setDataSource] = useState([
      { key: 1, client: "Client 1", technicien: "Technicien 1", etat: "En cours" },
      { key: 2, client: "Client 2", technicien: "Technicien 2", etat: "Planifié" },
      { key: 3, client: "Client 3", technicien: "Technicien 3", etat: "Clôturé" },
    ]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      // getOrders().then((res) => {
      //   setDataSource(res.products.splice(0, 3));
      //   setLoading(false);
      // });
      setLoading(false); // On désactive le chargement après 1 seconde
    }, []);
  
    const columns = [
      {
        title: "Client",
        dataIndex: "client",
      },
      {
        title: "Technicien",
        dataIndex: "technicien",
      },
      {
        title: "État",
        dataIndex: "etat",
        render: (text) => {
          let color;
          switch (text) {
            case "En cours":
              color = "red";
              break;
            case "Planifié":
              color = "yellow";
              break;
            case "Clôturé":
              color = "green";
              break;
            default:
              color = "gray";
          }
          return <Tag color={color}>{text}</Tag>;
        },
      },
    ];
  
    return (
      <>
        <Typography.Text>Progression d'intervention</Typography.Text>
        <Table
          className="dashboard-table"
          columns={columns}
          loading={loading}
          dataSource={dataSource}
          pagination={false}
        />
      </>
    );
  }
  function DashboardChart() {
    const [reveneuData, setReveneuData] = useState({
      labels: [],
      datasets: [],
    });
  
    const revenueData = {
      labels: ['Cloturés', 'en attente', 'plannifiés', 'reportés', 'en cours'],
      datasets: [
        {
          label: 'total',
          data: [1000, 1200, 800, 1500, 2000],
          backgroundColor: 'red',
        },
      ],
    };
    
    useEffect(() => {
      setReveneuData(revenueData);
    }, []);
    
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Pannes",
        },
      },
    };
  
    return (
      <Card style={{ width: 600, height: 450 ,marginLeft: 50}}>
        <Bar options={options} data={reveneuData} />
      </Card>
    );
  }
  export default Dashboard;
  