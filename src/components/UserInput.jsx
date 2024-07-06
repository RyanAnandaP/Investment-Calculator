import React from "react";

const UserInput = ({ onChange, userInputProp }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            min={0}
            required
            value={userInputProp.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            min={0}
            required
            value={userInputProp.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            min={0}
            required
            value={userInputProp.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </p>

        <p>
          <label>Duration (Year)</label>
          <input
            type="number"
            min={0}
            required
            value={userInputProp.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
