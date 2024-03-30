import React from "react";
import "../App.css";
import { Box, Button, Drawer, Typography } from "@mui/material";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import CodeIcon from "@mui/icons-material/Code";
import DrawIcon from "@mui/icons-material/Draw";
import GroupsIcon from "@mui/icons-material/Groups";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const Sidebar = () => {
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          "& .MuiDrawer-paper": {
            width: 230,
            boxSizing: "border-box",
            border: "2px solid #ccc",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
            borderBottom: "2px solid #ccc",
          }}
          className="BoxOne"
        >
          <img
            src="https://media.licdn.com/dms/image/D4D0BAQECaRfBTB_V3Q/company-logo_200_200/0/1699342563817?e=1719446400&v=beta&t=hR5qMbqmPdz6sjXz18MCD28IKJ0S9-3TjVq-tYhRQyQ"
            alt="InnovateHub Logo"
            className="Logo"
          />
          <Typography sx={{ ml: "10px", fontSize: "20px", color: "#333" }}>
            InnovateHub
          </Typography>
        </Box>

        <Box
          sx={{
            border: "1px solid #ccc",
            marginTop: "2px",
            marginLeft: "3px",
            marginRight: "7px",
          }}
        >
          <Button
            startIcon={<DrawIcon />}
            sx={{
              color: "black",
              border: "1px solid #ccc",
              marginBottom: "3px",
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
            style={{
              fontSize: "14px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            Design Team
          </Button>
          <Button
            startIcon={<GroupsIcon />}
            sx={{
              color: "black",
              border: "1px solid #ccc",
              marginBottom: "3px",
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
            style={{
              fontSize: "14px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            Marketing Team
          </Button>
          <Button
            startIcon={<CodeIcon />}
            sx={{
              color: "black",
              border: "1px solid #ccc",
              marginBottom: "3px",
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
            style={{
              fontSize: "14px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            {" "}
            Development Team
          </Button>
          <Button
            startIcon={<AddBoxOutlinedIcon />}
            style={{
              fontSize: "14px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
            sx={{
              border: "1px solid #ccc",
              color: "grey",
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            Create Team
          </Button>
        </Box>

        <Button
          startIcon={<AddBoxOutlinedIcon />}
          style={{
            color: "black",
            marginRight: "auto",
            fontSize: "14px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginBottom: "5px",
          }}
          sx={{ "&:hover": { backgroundColor: "#f0f0f0" } }}
        >
          Folder
        </Button>

        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            id="dropdown-basic"
            style={{
              fontSize: "14px",
              marginBottom: "10px",
              width: "95%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
            sx={{ "&:hover": { backgroundColor: "#f0f0f0" } }}
          >
            <FolderCopyOutlinedIcon sx={{ marginRight: "5px" }} />
            PRODUCTS
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Roadmap</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Feedback</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Performance</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Team</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Analytics</Dropdown.Item>
            <Dropdown.Item style={{ color: "grey" }} href="#/action-4">
              <AddBoxOutlinedIcon sx={{ marginRight: "5px" }} />
              Add new sub
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            id="dropdown-basic"
            style={{
              fontSize: "14px",
              marginBottom: "10px",
              width: "95%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
            sx={{ "&:hover": { backgroundColor: "#f0f0f0" } }}
          >
            <FolderCopyOutlinedIcon sx={{ marginRight: "5px" }} />
            SALES
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Sale 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Sale 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Sale 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            id="dropdown-basic"
            style={{
              fontSize: "14px",
              marginBottom: "10px",
              width: "95%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
            sx={{ "&:hover": { backgroundColor: "#f0f0f0" } }}
          >
            <FolderCopyOutlinedIcon sx={{ marginRight: "5px" }} />
            DESIGN
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Design 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Design 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Design 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button
          startIcon={<FolderCopyOutlinedIcon />}
          style={{
            color: "black",
            fontSize: "14px",
            width: "95%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginRight: "auto",
          }}
          sx={{ "&:hover": { backgroundColor: "#f0f0f0" } }}
        >
          Office
        </Button>

        <Button
          startIcon={<FolderCopyOutlinedIcon />}
          style={{
            color: "black",
            fontSize: "14px",
            width: "95%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginRight: "auto",
          }}
          sx={{ "&:hover": { backgroundColor: "#f0f0f0" } }}
        >
          Legal
        </Button>

        <Button
          startIcon={<GroupAddOutlinedIcon />}
          style={{
            color: "black",
            marginRight: "auto",
            marginTop: "50%",
            fontSize: "13px",
            width: "95%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          sx={{ "&:hover": { backgroundColor: "#f0f0f0" } }}
        >
          Invite Teammates
        </Button>

        <Button
          startIcon={<HelpOutlineOutlinedIcon />}
          style={{
            color: "black",
            marginRight: "auto",
            fontSize: "13px",
            width: "95%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          sx={{ "&:hover": { backgroundColor: "#f0f0f0" } }}
        >
          Help & First steps
        </Button>
        <Typography sx={{ fontSize: "14px", ml: "8px" }}>
          7 Days Left on Trial
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
              marginRight: "auto",
              fontSize: "11px",
            }}
            sx={{ "&:hover": { backgroundColor: "#f0f0f0" } }}
          >
            Add billing
          </Button>
        </Typography>
      </Drawer>
    </>
  );
};

export default Sidebar;
