import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { FormControl, FormHelperText, FormGroup, FormControlLabel } from 'material-ui/Form'
import Checkbox from 'material-ui/Checkbox';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import SvgIcon from 'material-ui/SvgIcon';

const colors = {
	blue: '#2085E4',
	error: '#FFA5A5',
	valid: '#6FCF97',
	grey: '#828282',
	bg: '#EBF2F8',
	text: '#4F4F4F',
};

const styles = {
	contentWrap: {
		flexGrow: 1,
		paddingTop: 50,
		paddingBottom: 50,
		background: colors.bg,
	},
	contentCenter: {
		width: 520,
		display: 'table',
		margin: '0px auto',
	},
	formControlLabel: {
		marginRight: 0,
		marginTop: "-14px",
	},
  btn_submit_root: {
    background: colors.blue,
    borderRadius: 5,
    border: 0,
    color: 'white',
    width: 290,
    height: 54,
    padding: '0 5px',
    marginTop: 30,
    marginLeft: 160,
    boxShadow: '0 3px 6px rgba(0, 0, 0, .15)',
  },
  btn_submit_label: {
  	fontSize: 20,
  	fontWeight: 500,
    textTransform: 'none',
  },
  checkbox_default: {
  	color: '#BDBDBD',
  	borderRadius: 4,
  },
  checkbox_checked: {
    color: colors.blue,
  	borderRadius: 4,
  },
  checkbox_label: {
  	fontSize: 13,
  },
  checkbox_icon: {
  	borderRadius: 4,
  },
  select_sel: {
  	fontSize: 24,
  	background: "transparent",
		color: colors.text,
		padding: "22px 50px 11px 20px",
  	lineHeight: "27px",
  	height: 60,
  },
  select_icon: {
  	display: "none",
  },
  select_icon_new: {
  	position: "absolute",
  	right: 20,
  	top: 25,
  	width: 19,
  	height: 11,
  	color: colors.grey,
  },
  text_root: {
  	padding: "14px 18px 2px",
  	lineHeight: "40px",
  	height: 60,
  	border: "2px solid transparent",
  	borderRadius: 4,
  	marginTop: "0px !important",
  	transition: "box-shadow 200ms cubic-bezier(0.0, 0, 0.2, 1)",
  },
  text_input: {
  	height: 27,
  	fontSize: 24,
  	lineHeight: "27px",
  	color: colors.text,
  },
  text_focused: {
  	boxShadow: '0 6px 15px rgba(88, 107, 125, 0.2)',
  },
  text_error: {
  	borderColor: colors.error,
  },
  label_root: {
  	left: 20,
  	fontSize: 16,
  	color: colors.grey,
  },
	label_shrink: {
		transform: "translate(0, 7px) scale(0.7)",
	},
	helper_root: {
		position: "absolute",
		top: 63,
		left: 0,
		color: colors.text,
		fontSize: 13,
		paddingLeft: 24,
		lineHeight: "18px",
		marginTop: 0,
	},
	helper_error: {
		color: colors.text,
	},
};

// Иконка для выпадающего списка
const SelectIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 19 11">
    <path d="M 8.5 8.5L 8.14645 8.85355L 8.5 9.20711L 8.85355 8.85355L 8.5 8.5ZM -0.353553 0.353553L 8.14645 8.85355L 8.85355 8.14645L 0.353553 -0.353553L -0.353553 0.353553ZM 8.85355 8.85355L 17.3536 0.353553L 16.6464 -0.353553L 8.14645 8.14645L 8.85355 8.85355Z" />
  </SvgIcon>
);

// Иконка для неотмеченного чекбокса
const CheckboxIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 23 23">
    <path fill="#FFFFFF" d="M 0 4C 0 1.79086 1.79086 0 4 0L 19 0C 21.2091 0 23 1.79086 23 4L 23 19C 23 21.2091 21.2091 23 19 23L 4 23C 1.79086 23 0 21.2091 0 19L 0 4Z"/>
		<path d="M 4 2L 19 2L 19 -2L 4 -2L 4 2ZM 21 4L 21 19L 25 19L 25 4L 21 4ZM 19 21L 4 21L 4 25L 19 25L 19 21ZM 2 19L 2 4L -2 4L -2 19L 2 19ZM 4 21C 2.89543 21 2 20.1046 2 19L -2 19C -2 22.3137 0.686292 25 4 25L 4 21ZM 21 19C 21 20.1046 20.1046 21 19 21L 19 25C 22.3137 25 25 22.3137 25 19L 21 19ZM 19 2C 20.1046 2 21 2.89543 21 4L 25 4C 25 0.686291 22.3137 -2 19 -2L 19 2ZM 4 -2C 0.686291 -2 -2 0.686292 -2 4L 2 4C 2 2.89543 2.89543 2 4 2L 4 -2Z"/>
  </SvgIcon>
);

// Иконка для отмеченного чекбокса
const CheckboxCheckedIcon = (props) => (
	<SvgIcon {...props} viewBox="0 0 23 23">
		<path d="M 0 4C 0 1.79086 1.79086 0 4 0L 19 0C 21.2091 0 23 1.79086 23 4L 23 19C 23 21.2091 21.2091 23 19 23L 4 23C 1.79086 23 0 21.2091 0 19L 0 4Z"/>
		<path fill="#FFFFFF" transform="translate(5 7)" d="M 5.65217 8L 4.91568 8.67645L 5.65217 9.47831L 6.38866 8.67645L 5.65217 8ZM -0.736489 2.5226L 4.91568 8.67645L 6.38866 7.32355L 0.736489 1.1697L -0.736489 2.5226ZM 6.38866 8.67645L 13.7365 0.676449L 12.2635 -0.676449L 4.91568 7.32355L 6.38866 8.67645Z"/>
	</SvgIcon>
);

// Иконка для сообщения о некорректном вводе
const ErrorIcon = (props) => (
	<SvgIcon {...props} viewBox="-1 -1 20 20">
		<path fill={colors.error} transform="translate(7 1)" d="M 2.37305 8.38086L 0.966797 8.38086L 0.767578 2.46875L 2.57227 2.46875L 2.37305 8.38086ZM 1.66992 9.30664C 1.95508 9.30664 2.18359 9.39063 2.35547 9.55859C 2.53125 9.72656 2.61914 9.94141 2.61914 10.2031C 2.61914 10.4609 2.53125 10.6738 2.35547 10.8418C 2.18359 11.0098 1.95508 11.0938 1.66992 11.0938C 1.38867 11.0938 1.16016 11.0098 0.984375 10.8418C 0.8125 10.6738 0.726562 10.4609 0.726562 10.2031C 0.726562 9.94531 0.8125 9.73242 0.984375 9.56445C 1.16016 9.39258 1.38867 9.30664 1.66992 9.30664Z"/>
		<path fill={colors.error} d="M 16.5 8.88461C 16.5 13.2536 13.0159 16.7692 8.75 16.7692L 8.75 18.7692C 14.1491 18.7692 18.5 14.3293 18.5 8.88461L 16.5 8.88461ZM 8.75 16.7692C 4.48413 16.7692 1 13.2536 1 8.88461L -1 8.88461C -1 14.3293 3.35089 18.7692 8.75 18.7692L 8.75 16.7692ZM 1 8.88461C 1 4.51561 4.48413 1 8.75 1L 8.75 -1C 3.35089 -1 -1 3.43994 -1 8.88461L 1 8.88461ZM 8.75 1C 13.0159 1 16.5 4.51561 16.5 8.88461L 18.5 8.88461C 18.5 3.43994 14.1491 -1 8.75 -1L 8.75 1Z"/>
	</SvgIcon>
);

// Выпадающий список
class CustomSelect extends React.Component {
	constructor(props) {
    super(props);
    this.state = {purpose: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
  	const cls = this.props.cls;

  	return (
  		<div>
  			<FormControl className="formControlSelect">
	        <InputLabel htmlFor="credit-purpose" classes={{
          	root: cls.label_root,
          	shrink: cls.label_shrink,
          }}>Цель кредита</InputLabel>
	      	<SelectIcon className={cls.select_icon_new} />
	        <Select
	        	displayEmpty
	        	value={this.state.purpose}
	        	onChange={this.handleChange}
	          className="select-1"
	          classes={{
	          	select: cls.select_sel,
	          	icon: cls.select_icon,
	          }}
	          input={<Input name="purpose" id="credit-purpose" />}
	        	>
	          <MenuItem value=""></MenuItem>
	          <MenuItem value={1}>Очень важная цель</MenuItem>
	          <MenuItem value={2}>Цель</MenuItem>
	          <MenuItem value={3}>Без цели</MenuItem>
	        </Select>
	      </FormControl>
  		</div>
  	);
  }
}

// Чекбокс
class CustomCheckbox extends React.Component {
	constructor(props) {
    super(props);
  }

  render() {
  	const cls = this.props.cls;

  	return (
  		<div>
  			<FormGroup row>
	        <FormControlLabel
		        className={cls.formControlLabel}
	          control={
	            <Checkbox
		            className="checkbox-1"
	            	classes={{
	                default: cls.checkbox_default,
	                checked: cls.checkbox_checked,
	              }}
	              icon={<CheckboxIcon className={cls.checkbox_icon} />}
	              checkedIcon={<CheckboxCheckedIcon className={cls.checkbox_icon} />}
	              value="checkedA"
	            />
	          }
	          classes={{
	          	label: cls.checkbox_label,
	          }}
	          label="Согласен(на) с условиями хранения и обработки персональных данных"
	        />
	      </FormGroup>
  		</div>
  	);
  }
}

// Текстовое поле
class CustomTextbox extends React.Component {
	constructor(props) {
    super(props);
    this.state = {error: props.error ? true : false, valid: props.valid ? true : false};
  }

  render() {
  	const cls = this.props.cls;
  	const isValid = this.state.valid;
  	const isError = this.state.error;

  	let helperText = null;
  	let formControlClass = null;

  	if (isError) {
  		helperText = <FormHelperText classes={{
				          	root: cls.helper_root,
				          	error: cls.helper_error,
				          }}><ErrorIcon className="error_icon"/>
				          {this.props.error_text}</FormHelperText>;
  	}

  	if (isValid) {
  		formControlClass = "formControlSelect field_valid";
  	}
  	else {
  		formControlClass = "formControlSelect";
  	}

  	return (
  		<div>
  			<FormControl className={formControlClass} error={isError}>
          <InputLabel htmlFor={this.props.id} classes={{
          	root: cls.label_root,
          	shrink: cls.label_shrink,
          }}>{this.props.label}</InputLabel>
          <Input id={this.props.id} disableUnderline defaultValue={this.props.value} type={this.props.type} classes={{
          	root: cls.text_root,
          	input: cls.text_input,
          	focused: cls.text_focused,
          	error: cls.text_error,
          }} />
          {helperText}
        </FormControl>
  		</div>
  	);
  }
}

function CustomFields(props) {
  const { classes } = props;
  return (
    <div className={classes.contentWrap}>
    	<div className={classes.contentCenter}>
				{/* Текстовое поле, некорректный ввод */}    		
        <CustomTextbox error error_text="Укажите email" label="Ваше email" value="" type="email" id="texbox-4" cls={classes} />
	      {/* Текстовое поле, корректный ввод */}
        <CustomTextbox valid label="Ваше телефон" value="1234" type="text" id="texbox-3" cls={classes} />
	      {/* Текстовое поле, ввод пароля */}
        <CustomTextbox label="Пароль" value="" type="password" id="texbox-2" cls={classes} />
	      {/* Текстовое поле */}
        <CustomTextbox label="Ваше имя" value="" type="text" id="texbox-1" cls={classes} />

	      {/* Выпадающий список */}
    		<CustomSelect cls={classes} />
	    	{/* Чекбокс */}
	      <CustomCheckbox cls={classes} />
		    {/* Кнопка */}
	      <Button raised color="primary" className="btn-submit-1" classes={{
	        root: props.classes.btn_submit_root,
	        label: props.classes.btn_submit_label,
	      }}>
	        Подобрать предложения
	      </Button>
      </div>
    </div>
  );
}

CustomFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomFields);