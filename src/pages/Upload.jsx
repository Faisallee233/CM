import { useState } from "react"; 
function Upload({ showToast }) {
  const [files, setFiles] = useState([]);
  const addFile = () => { setFiles([...files, { name:`event_photo_${files.length+1}.jpg`, size:"2.4 MB", status:"Uploaded" }]); showToast("✅ File uploaded successfully!"); };
  return (
    <div className="page">
      <div className="container" style={{maxWidth:760}}>
        <div className="section-title">Upload <span>Files</span></div>
        <p className="section-sub">Share event requirements, venue photos, or contracts</p>
        <div className="divider"/>
        <div className="upload-zone" onClick={addFile}>
          <div className="upload-icon">📁</div>
          <div className="upload-title">Drop files here or click to upload</div>
          <div className="upload-hint">Supports JPG, PNG, PDF, DOC — Max 10MB per file</div>
        </div>
        {files.length > 0 && (
          <div className="card" style={{padding:0, overflow:"hidden"}}>
            <table>
              <thead><tr><th>File Name</th><th>Size</th><th>Status</th><th>Action</th></tr></thead>
              <tbody>
                {files.map((f,i) => (
                  <tr key={i}>
                    <td>📄 {f.name}</td>
                    <td style={{color:"var(--muted)"}}>{f.size}</td>
                    <td><span className="badge badge-success">{f.status}</span></td>
                    <td><button className="btn btn-dark" style={{padding:"4px 10px", fontSize:"0.7rem"}} onClick={() => setFiles(files.filter((_,j)=>j!==i))}>Remove</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Upload