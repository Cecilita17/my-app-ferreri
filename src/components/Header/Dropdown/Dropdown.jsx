import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./Dropdown.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


function BasicButtonExample() {
  
  return (
    <DropdownButton variant="" className="dropBtn" title="Our Menu">
      <Link to={`/category/vegetarian`}>
        <Dropdown.Item href="#/action-1" className="dropItem">
          Vegetarian
        </Dropdown.Item>
      </Link>
      <Link  to={`/category/meatlovers`}>
        <Dropdown.Item href="#/action-2" className="dropItem">
          Meat Lovers
        </Dropdown.Item>
      </Link>
    </DropdownButton>
  );
}

export default BasicButtonExample;
