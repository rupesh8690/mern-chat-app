export default function GenderCheckbox({onCheckboxChange,selectedGender}) {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label cursor-pointer ${selectedGender==="male"?"selected":""}`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            onChange={()=>onCheckboxChange("male")}
            checked={selectedGender === 'male'}
            
          />
        </label>
      </div>

      <div className="form-control">
        <label
          className={`label cursor-pointer ${selectedGender==="female"?"selected":""}`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            onChange={()=>onCheckboxChange("female")}
            checked={selectedGender === 'female'}

          />
        </label>
      </div>
    </div>
  );
}
