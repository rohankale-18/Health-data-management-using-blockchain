//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

contract Healthdata {
  
  struct Access{
     address user; 
     bool access; 
  }
  mapping(address=>string[]) value;
  mapping(address=>mapping(address=>bool)) ownership;
  mapping(address=>Access[]) accessList;
  mapping(address=>mapping(address=>bool)) previousData;

  function add(address _user,string memory url) external {
      value[_user].push(url);
  }
  function allow(address user) external {
      ownership[msg.sender][user]=true; 

      if(previousData[msg.sender][user]){
         for(uint i=0;i<accessList[msg.sender].length;i++){
             if(accessList[msg.sender][i].user==user){
                  accessList[msg.sender][i].access=true; 
             }
         }
      }else{
          accessList[msg.sender].push(Access(user,true));  
          previousData[msg.sender][user]=true;  
      }
    
  }
  function disallow(address user) public{
      ownership[msg.sender][user]=false;
      for(uint i=0;i<accessList[msg.sender].length;i++){
          if(accessList[msg.sender][i].user==user){ 
              accessList[msg.sender][i].access=false;  
          }
      }
  }

  function display(address _user) external view returns(string[] memory){
      require(_user==msg.sender || ownership[_user][msg.sender],"You don't have access");
      return value[_user];
  }

  function shareAccess() public view returns(Access[] memory){
      return accessList[msg.sender];
  }
function Pay(address payable _tosend) payable public {
    require(msg.value>0,"Amount Payable Cannot be Zero");
    _tosend.transfer(msg.value);
}
 struct Insurance {
        string provider;
        string policyNumber;
        uint256 coverageAmount;
        bool isEnrolled;
    }
    
    
    mapping(address => Insurance[]) public insurances;
    
    
    function enrollInsurance(string memory _provider, string memory _policyNumber, uint256 _coverageAmount) public {
       
        Insurance memory newInsurance = Insurance(_provider, _policyNumber, _coverageAmount, true);
        
        
        insurances[msg.sender].push(newInsurance);
    }
    
    
    function updateInsurance(uint256 _policyIndex, string memory _provider, string memory _policyNumber, uint256 _coverageAmount) public {
        
        require(insurances[msg.sender].length > 0, "Patient has no insurance policies.");
        
        
        require(_policyIndex < insurances[msg.sender].length, "Invalid policy index.");
        
        
        insurances[msg.sender][_policyIndex].provider = _provider;
        insurances[msg.sender][_policyIndex].policyNumber = _policyNumber;
        insurances[msg.sender][_policyIndex].coverageAmount = _coverageAmount;
    }
    
    
    function checkCoverageAmount(address _patient, uint256 _policyIndex) public view returns (uint256) {
        
        require(insurances[_patient].length > 0, "Patient has no insurance policies.");
        
       
        require(_policyIndex < insurances[_patient].length, "Invalid policy index.");
        
       
        return insurances[_patient][_policyIndex].coverageAmount;
    }
     function getAllInsurances() public view returns (Insurance[] memory) {
       
        return insurances[msg.sender];
    }
       struct TelemedicineAppointment {
        uint256 date;
        uint256 duration;
        string notes;
        bool isBooked;
        address doctorAddress;
    }
    
    
    mapping(address => TelemedicineAppointment) public telemedicineAppointments;
    
    
    mapping(address => TelemedicineAppointment[]) public doctorAppointments;
    
    
    function bookTelemedicineAppointment(uint256 _date, uint256 _duration, string memory _notes, address _doctorAddress) public {
        
        require(!telemedicineAppointments[msg.sender].isBooked, "Appointment is already booked.");
        
        
        telemedicineAppointments[msg.sender] = TelemedicineAppointment(_date, _duration, _notes, true, _doctorAddress);
        
        
        doctorAppointments[_doctorAddress].push(telemedicineAppointments[msg.sender]);
    }
    
    
    function updateTelemedicineAppointment(uint256 _date, uint256 _duration, string memory _notes) public {
       
        require(telemedicineAppointments[msg.sender].isBooked, "No appointment booked.");
        
        
        telemedicineAppointments[msg.sender].date = _date;
        telemedicineAppointments[msg.sender].duration = _duration;
        telemedicineAppointments[msg.sender].notes = _notes;
        
        
        TelemedicineAppointment[] storage appointments = doctorAppointments[telemedicineAppointments[msg.sender].doctorAddress];
        for (uint256 i = 0; i < appointments.length; i++) {
            if (appointments[i].isBooked && appointments[i].doctorAddress == telemedicineAppointments[msg.sender].doctorAddress) {
                appointments[i].date = _date;
                appointments[i].duration = _duration;
                appointments[i].notes = _notes;
                break;
            }
        }
    }
    
    
    function cancelTelemedicineAppointment() public {
       
        require(telemedicineAppointments[msg.sender].isBooked, "No appointment booked.");
        
       
        address doctorAddress = telemedicineAppointments[msg.sender].doctorAddress;
        delete telemedicineAppointments[msg.sender];
        
        
        TelemedicineAppointment[] storage appointments = doctorAppointments[doctorAddress];
        for (uint256 i = 0; i < appointments.length; i++) {
            if (appointments[i].isBooked && appointments[i].doctorAddress == doctorAddress) {
                delete appointments[i];
                break;
            }
        }
    }
    
    
    function getDoctorAppointments(address _doctorAddress) public view returns (TelemedicineAppointment[] memory) {
        return doctorAppointments[_doctorAddress];
    }
}