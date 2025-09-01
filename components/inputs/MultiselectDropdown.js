import React from "react";
import PropTypes from "prop-types";
import { default as ReactSelect } from "react-select";

const customStyles = {
  control: (base, { isFocused }) => ({
    ...base,
    padding: "0 10px", // Ensure proper padding
    fontSize: "14px",
    // border: isFocused ? "1px solid #3F8CFF" : "1px solid #D8E0F0",
    boxShadow: "0 1px 2px rgba(184, 200, 224, 0.2221)",
    // outline: isFocused ? "3px solid rgba(63, 140, 255, 0.12)" : "none",
    width: "100%",
    borderRadius: "6px",
    boxSizing: "border-box",
    color: "#0a1629",
    transition: "border-color 0.3s ease",
    height: "36.6px",
    display: "flex",
    overflow: "hidden",
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0",
    margin: "0",
    boxSizing: "border-box",

    flex: 1,  // Ensures container doesn't expand
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  }),
  container: (base, state) => ({
    ...base,
    '& .css-19bb58m': {
      margin: "0",
      padding: "0",
      marginTop: "-1px",
      boxSizing: "border-box",
    },
    '& .css-1cfo1cf': {
      margin: "0",
      padding: "0",
      marginBottom: "2px"
    },
    '& .css-1jqq78o-placeholder': {
      marginBottom: "2px",
      padding: "0",
    },

  }),
  placeholder: (base) => ({
    ...base,
    marginBottom: "2px",
  }),
  input: (base) => ({
    ...base,
    // display: "flex",
    alignItems: "center",
    margin: 0,
    padding: "0",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "100%",  // Prevents expansion
    flex: 1, // Keeps it inside the container
  }),
  singleValue: (base) => ({
    ...base,
    // display: "flex",
    // alignItems: "center",
    // height: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "100%",
  }),
  indicatorsContainer: (base) => ({
    ...base,
    display: "flex",
    alignItems: "center",
  }),
  menu: (base, isSelected, isFocused) => ({
    ...base,
    // override border radius to match the box
    borderRadius: "6px",
    fontSize: "14px",
    zIndex: "10",

  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    background: isSelected ? "rgba(255, 255, 255, 1)" : "transparent",
    color: isSelected ? "rgba(0, 0, 0, 1)" : undefined,
    zIndex: 1,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
};

const MultiSelectDropdown = (props) => {
  if (props.allowSelectAll) {
    return (
      <span
        className="d-inline-block custom-input text-sm"
        data-toggle="popover"
        data-trigger="focus"
        data-content="Please select account(s)"
      >
        <ReactSelect
          className="custom-checkbox-select text-sm"
          isDisabled={props.isDisabled}
          styles={customStyles}
          {...props}
          options={[props.allOption, ...props.options]}
          onChange={(selected) => {
            if (
              selected !== null &&
              selected.length > 0 &&
              selected[selected.length - 1].value === props.allOption.value
            ) {
              return props.onChange(props.options, props.drpIdentity);
            }
            return props.onChange(selected, props.drpIdentity);
          }}
          placeholder="Select"
        />
      </span>
    );
  }

  return <ReactSelect styles={customStyles} {...props} />;
};

MultiSelectDropdown.propTypes = {
  options: PropTypes.array,
  value: PropTypes.any,
  onChange: PropTypes.func,
  allowSelectAll: PropTypes.bool,
  allOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })
};

MultiSelectDropdown.defaultProps = {
  allOption: {
    label: "Select all",
    value: "*"
  }
};

export default MultiSelectDropdown;
