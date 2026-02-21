import React, { useEffect, useState } from 'react';
import './WorkPermit.css';
import { getWorkPermit } from '../queries/getWorkPermit';
import { WorkPermit as IWorkPermit } from '../types';
const WorkPermit: React.FC = () => {

  const [workPermitData, setWorkPermitData] = useState<IWorkPermit | null>(null);
  useEffect(() => {
    async function fetchWorkPermitData() {
      const data = await getWorkPermit();
      setWorkPermitData(data);
    }
    fetchWorkPermitData();
  }, []);

  if (!workPermitData) return <div>Loading...</div>;

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎓 Work Permit</h2>
        <p className="work-permit-summary">
          I'm a permanent resident of the United States authorized to work for any employer 🛂, which allows me to work in the USA! I have no visa restrictions, giving me the opportunity to build valuable experience and grow my career here. 🌟
        </p>
        {workPermitData.additionalInfo && <p className="additional-info">{workPermitData.additionalInfo}</p>}
      </div>
    </div>
  );
};

export default WorkPermit;
