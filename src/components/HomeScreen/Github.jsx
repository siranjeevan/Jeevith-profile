import React, { useEffect, useState, useRef } from "react";

function colorFor(count, max) {
  if (!count) return "#2a2520";
  const intensity = max > 0 ? count / max : 0;
  const colors = [
    "#5c4a3a", // dark brown
    "#7a6450", // medium brown  
    "#9c8266", // light brown
    "#baa794"  // lightest brown
  ];
  const index = Math.min(Math.floor(intensity * colors.length), colors.length - 1);
  return colors[index];
}

export default function App() {
  const [weeks, setWeeks] = useState([]);
  const [maxCount, setMaxCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const username = "siranjeevan"; 

  const gridRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const query = `
        query {
          user(login: "${username}") {
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
          }
        }
      `;

      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const json = await res.json();
      const weeksData =
        json.data.user.contributionsCollection.contributionCalendar.weeks;

      setWeeks(weeksData);

      const allCounts = weeksData.flatMap((w) =>
        w.contributionDays.map((d) => d.contributionCount)
      );
      setMaxCount(allCounts.length ? Math.max(...allCounts) : 0);

      setLoading(false);

      // auto-scroll to last week after data loads
      setTimeout(() => {
        if (gridRef.current) {
          gridRef.current.scrollLeft = gridRef.current.scrollWidth;
        }
      }, 300);
    }

    fetchData();
  }, []);

  if (loading) return <div style={{ color: "#aaa" }}>Loading...</div>;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>GitHub Activity</h2>
      <div ref={gridRef} style={styles.grid}>
        {weeks.map((week, wi) => (
          <div key={wi} style={styles.weekCol}>
            {week.contributionDays.map((day, di) => (
              <div
                key={di}
                title={`${day.contributionCount} on ${day.date}`}
                style={{
                  ...styles.cell,
                  background: colorFor(day.contributionCount, maxCount),
                  animationDelay: `${(wi * 7 + di) * 0.02}s`,
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.2)";
                  e.target.style.boxShadow = "0 0 15px rgba(186, 167, 148, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "none";
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "24px",
    background: "linear-gradient(145deg, #1a1612, #baa794)",
    borderRadius: "20px",
    boxShadow: "0 8px 25px rgba(0,0,0,.6)",
    color: "#fff",
    width: "600px",
    fontFamily: "Inter, sans-serif",
    animation: "fadeIn 0.8s ease-in",
  },
  heading: {
    margin: "0 0 16px 0",
    fontSize: "20px",
    fontWeight: "600",
    color: "#baa794",
    animation: "slideDown 0.6s ease-out",
  },
  grid: {
    display: "flex",
    gap: "6px",
    overflowX: "auto",
    maxWidth: "700px",
    paddingBottom: "6px",
    scrollBehavior: "smooth",
  },
  weekCol: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  cell: {
    width: "20px",
    height: "20px",
    borderRadius: "4px",
    border: "1px solid #5c4a3a",
    transition: "all 0.3s ease",
    cursor: "pointer",
    flexShrink: 0,
    animation: "popIn 0.5s ease-out both",
  },
};

// Add CSS animations
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes popIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }
`;
if (!document.head.querySelector('style[data-github-animations]')) {
  styleSheet.setAttribute('data-github-animations', 'true');
  document.head.appendChild(styleSheet);
}