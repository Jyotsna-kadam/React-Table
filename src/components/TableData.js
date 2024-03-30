import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Button,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Dropdown from "react-bootstrap/Dropdown";
import TextField from "@mui/material/TextField";
import TuneIcon from "@mui/icons-material/Tune";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Member1 from "../static/Member1.jpg";
import Member2 from "../static/Member2.jpg";
import Member3 from "../static/Member3.jpg";
import Member4 from "../static/Member4.jpg";
import Member5 from "../static/Member5.jpg";
import Member6 from "../static/Member6.jpg";
import paypal from "../static/paypal.png";
import microsoft from "../static/microsoft.png";
import instagram from "../static/instagram.png";
import google from "../static/google.png";
import shopify from "../static/shopify.png";
// import member3 from '../static/member3.jpg';

const data = [
  {
    brandName: "PayPal",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Members: [Member1, Member2, Member6, Member5, Member4],
    category: "B2B, E-commerce",
    tags: "#Digital",
    nextMeeting: "In 30 Minutes",
    checked: false,
  },
  {
    brandName: "Microsoft",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Members: [Member3, Member4, Member5, Member2],
    category: "SAAS",
    tags: "#OnlineShopping",
    nextMeeting: "In 10 Minutes",
    checked: false,
  },
  {
    brandName: "Instagram",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Members: [Member5, Member6],
    category: "Mobile",
    tags: "#Buy",
    nextMeeting: "Tomorrow",
    checked: false,
  },
  {
    brandName: "Google",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Members: [Member2, Member4],
    category: "Technology, SAAS",
    tags: "#Tech, #Finance",
    nextMeeting: "In 6 Hours",
    checked: false,
  },
  {
    brandName: "Shopify",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Members: [Member6, Member3],
    category: "Web Services",
    tags: "#Program",
    nextMeeting: "In 30 Minutes",
    checked: false,
  },
];


const brandLogos = {
  PayPal: paypal,
  Microsoft: microsoft,
  Instagram: instagram,
  Google: google,
  Shopify: shopify,
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableCell: {
    border: "1px solid #ccc",
    textAlign: "left",
    padding: 8,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    marginRight: 5,
  },
});

const TableData = () => {
  const classes = useStyles();
  const [brands, setBrands] = useState(data);

  const handleCheckboxChange = (index) => {
    const updatedBrands = [...brands];
    updatedBrands[index].checked = !updatedBrands[index].checked;
    setBrands(updatedBrands);
  };

  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBrands = brands.filter((brand) =>
    brand.brandName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <TableContainer component={Paper}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: "25px" }}>Products</Typography>
        <div style={{ display: "flex" }}>
          <SearchOutlinedIcon sx={{ marginTop: "19px" }} />
          <TextField
            id="search"
            label="Search for..."
            variant="outlined"
            sx={{ margin: "10px 0" }}
            size="small"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>

      <TableRow>
        <TableCell>
          <div style={{ display: "flex" }}>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{
                  marginRight: "15px",
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                All Brands
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{
                  marginRight: "15px",
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                Desk
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{
                  marginRight: "15px",
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                Tags
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button
              variant="contained"
              style={{
                marginRight: "15px",
                backgroundColor: "white",
                color: "grey",
              }}
            >
              <TuneIcon />
              Filter
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "white", color: "grey" }}
            >
              <SwapVertIcon />
              Sort
            </Button>
          </div>
        </TableCell>
      </TableRow>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontSize: "20px", color: "#333" }}
              className={classes.tableCell}
            >
              Brands Name
            </TableCell>
            <TableCell
              sx={{ fontSize: "20px", color: "#333" }}
              className={classes.tableCell}
            >
              Descriptions
            </TableCell>
            <TableCell
              sx={{ fontSize: "20px", color: "#333" }}
              className={classes.tableCell}
            >
              Members
            </TableCell>
            <TableCell
              sx={{ fontSize: "20px", color: "#333" }}
              className={classes.tableCell}
            >
              Categories
            </TableCell>
            <TableCell
              sx={{ fontSize: "20px", color: "#333" }}
              className={classes.tableCell}
            >
              Tags
            </TableCell>
            <TableCell
              sx={{ fontSize: "20px", color: "#333" }}
              className={classes.tableCell}
            >
              Next meeting
            </TableCell>
            <TableCell
              sx={{ fontSize: "20px", color: "#333" }}
              className={classes.tableCell}
            >
              +
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredBrands.map((row, index) => (
            <TableRow key={index}>
              <TableCell className={classes.tableCell}>
                <Checkbox
                  checked={row.checked}
                  onChange={() => handleCheckboxChange(index)}
                />
                <img
                  src={brandLogos[row.brandName]}
                  alt={row.brandName}
                  style={{ width: 30, height: 30, marginRight: 5 }}
                />
                {row.brandName}
              </TableCell>

              <TableCell className={classes.tableCell}>
                <div>
                  {selectedRow === index ? (
                    <div>
                      {row.description}
                      <br />
                      <span
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => handleRowClick(null)}
                      >
                        Collapse
                      </span>
                    </div>
                  ) : (
                    <div>
                      {`${row.description
                        .split(" ")
                        .slice(0, 2)
                        .join(" ")} ...`}
                      <br />
                      <span
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => handleRowClick(index)}
                      >
                        Expand
                      </span>
                    </div>
                  )}
                </div>
              </TableCell>

              <TableCell className={classes.tableCell}>
                <div style={{ display: "flex" }}>
                  {Array.isArray(row.Members) &&
                    row.Members.map((member, i) => (
                      <img
                        key={i}
                        src={member}
                        alt={`Member ${i + 1}`}
                        className={classes.image}
                        style={{ marginLeft: i !== 0 ? "-15px" : "0" }}
                      />
                    ))}
                </div>
              </TableCell>
              <TableCell className={classes.tableCell}>
                {row.category}
              </TableCell>
              <TableCell className={classes.tableCell}>{row.tags}</TableCell>
              <TableCell className={classes.tableCell}>
                {row.nextMeeting}
              </TableCell>

              <TableCell className={classes.tableCell}>6</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "8%",
        }}
      >
        <Button
          variant="contained"
          sx={{
            marginRight: "15px",
            backgroundColor: "white",
            color: "black",
            "&:hover": {
              backgroundColor: "green",
              color: "white",
            },
          }}
        >
          <ArchiveOutlinedIcon />
          Archive
        </Button>

        <Button
          variant="contained"
          sx={{
            marginRight: "15px",
            backgroundColor: "white",
            color: "black",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
            },
          }}
        >
          <DeleteOutlineOutlinedIcon />
          Delete
        </Button>
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{
              marginRight: "15px",
              backgroundColor: "white",
              color: "black",
            }}
          >
            More
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </TableContainer>
  );
};

export default TableData;
