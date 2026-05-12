import React from 'react'
import lifterData from '../../assets/cesaraguirre.json'
// import '../../assets/open_powerlifting_style.css'

function OpenPowerliftingWindow() {
    // prefer rendering local JSON export of the profile (generated from CSV)
    const rows = Array.isArray(lifterData) ? lifterData : []

    // compute personal bests
    const pb = rows.reduce(
        (acc, r) => {
            const toNum = (v) => {
                const n = parseFloat((v || '').toString().replace(/[^0-9\.-]/g, ''))
                return Number.isFinite(n) ? n : 0
            }
            acc.squat = Math.max(acc.squat, toNum(r.Best3SquatKg), toNum(r.Squat3Kg), toNum(r.Squat2Kg))
            acc.bench = Math.max(acc.bench, toNum(r.Best3BenchKg), toNum(r.Bench3Kg))
            acc.deadlift = Math.max(acc.deadlift, toNum(r.Best3DeadliftKg), toNum(r.Deadlift3Kg))
            acc.total = Math.max(acc.total, toNum(r.TotalKg))
            acc.dots = Math.max(acc.dots, toNum(r.Dots))
            return acc
        },
        { squat: 0, bench: 0, deadlift: 0, total: 0, dots: 0 }
    )

    return (
        <div style={{ height: '100%', width: '100%', overflowY: 'auto', background: '#272727', color: '#edf2f4', fontSize: '9pt' }}>
            <div style={{ padding: '12px 18px' }}>
                <h1 style={{ color: 'rgb(237, 242, 244)', marginBottom: '12px', fontWeight: 'bold' , fontSize: '16pt'}}>{rows[0]?.Name || 'Lifter'}</h1>

                <section style={{ marginBottom: '16px' }}>
                    <h3 style={{ color: '#fb3640', fontWeight: 'bold', marginBottom: '8px', fontSize: '10pt' }}>Personal Bests</h3>
                    <table style={{ fontSize: '9pt', color: '#edf2f4', width: '100%', borderSpacing: '0px', border: 'none', marginBottom: '8px' }}>
                        <thead>
                            <tr style={{ fontSize: '8pt', fontWeight: 'bold', color: '#edf2f4', backgroundColor: '#bf262b' }}>
                                <th style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px', textAlign: 'left' }}>Equip</th>
                                <th style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px', textAlign: 'left' }}>Squat (kg)</th>
                                <th style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px', textAlign: 'left' }}>Bench (kg)</th>
                                <th style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px', textAlign: 'left' }}>Deadlift (kg)</th>
                                <th style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px', textAlign: 'left' }}>Total (kg)</th>
                                <th style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px', textAlign: 'left' }}>Dots</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ backgroundColor: '#333' }}>
                                <td style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px' }}>{rows[0]?.Equipment || '—'}</td>
                                <td style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px' }}><span className="squat">{pb.squat || '—'}</span></td>
                                <td style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px' }}><span className="bench">{pb.bench || '—'}</span></td>
                                <td style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px' }}><span className="deadlift">{pb.deadlift || '—'}</span></td>
                                <td style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px' }}>{pb.total || '—'}</td>
                                <td style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px' }}>{pb.dots || '—'}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section>
                    <h3 style={{ color: '#fb3640', fontWeight: 'bold', marginBottom: '8px', fontSize: '10pt' }}>Competition Results</h3>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ fontSize: '9pt', color: '#edf2f4', width: '100%', paddingLeft: '18px', paddingRight: '18px', paddingBottom: '12px', borderSpacing: '0px', border: 'none' }}>
                            <thead>
                                <tr style={{ fontSize: '8pt', fontWeight: 'bold', color: '#edf2f4', backgroundColor: '#bf262b' }}>
                                    <th style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px', textAlign: 'left' }}>Place</th>
                                    <th style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px', textAlign: 'left' }}>Fed</th>
                                    <th style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px', textAlign: 'left' }}>Date</th>
                                    <th style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px', textAlign: 'left' }}>Competition</th>
                                    <th style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px', textAlign: 'left' }}>Weight</th>
                                    <th style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px', textAlign: 'left' }}>Squat</th>
                                    <th style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px', textAlign: 'left' }}>Bench</th>
                                    <th style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px', textAlign: 'left' }}>Deadlift</th>
                                    <th style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px', textAlign: 'left' }}>Total</th>
                                    <th style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px', textAlign: 'left' }}>Dots</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((r, i) => (
                                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#333' : 'transparent' }}>
                                        <td style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px' }}>{r.Place}</td>
                                        <td style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px' }}>{r.Federation}</td>
                                        <td style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px' }}>{r.Date}</td>
                                        <td style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px' }}>{r.MeetName}</td>
                                        <td style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px' }}>{r.WeightClassKg}</td>
                                        <td style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px' }}><span className="squat">{r.Best3SquatKg}</span></td>
                                        <td style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px' }}><span className="bench">{r.Best3BenchKg}</span></td>
                                        <td style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px' }}><span className="deadlift">{r.Best3DeadliftKg}</span></td>
                                        <td style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px' }}>{r.TotalKg}</td>
                                        <td style={{ border: '0px', paddingRight: '0px', paddingLeft: '5px', height: '21px' }}>{r.Dots}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default OpenPowerliftingWindow
