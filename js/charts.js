/**
 * Chart.js Visualizations for Placement Statistics
 * Department of Computer Engineering - SAKEC
 */

let placementTrendChartInstance = null;
let packageDistChartInstance = null;
let sectorShareChartInstance = null;

function getChartColors() {
    const isDark = document.documentElement.classList.contains('dark-theme');
    return {
        textColor: isDark ? '#e2e8f0' : '#334155',
        gridColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
        primary: '#2563eb',
        primaryLight: 'rgba(37, 99, 235, 0.15)',
        gold: '#d97706',
        goldLight: 'rgba(217, 119, 6, 0.15)',
        emerald: '#10b981',
        violet: '#8b5cf6',
        slate: '#64748b'
    };
}

function initPlacementCharts() {
    if (typeof Chart === 'undefined') {
        console.warn('Chart.js not yet loaded.');
        return;
    }

    const colors = getChartColors();

    // Destroy existing instances if updating on theme toggle
    if (placementTrendChartInstance) placementTrendChartInstance.destroy();
    if (packageDistChartInstance) packageDistChartInstance.destroy();
    if (sectorShareChartInstance) sectorShareChartInstance.destroy();

    // 1. Placement Trends Chart (Multi-axis Bar & Line)
    const trendCtx = document.getElementById('placementTrendChart')?.getContext('2d');
    if (trendCtx) {
        const labels = departmentData.placements.trends.map(t => t.year);
        const avgSalary = departmentData.placements.trends.map(t => t.average);
        const maxSalary = departmentData.placements.trends.map(t => t.highest);
        const placementRates = departmentData.placements.trends.map(t => t.placed);

        placementTrendChartInstance = new Chart(trendCtx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        type: 'line',
                        label: 'Placement %',
                        data: placementRates,
                        borderColor: colors.emerald,
                        backgroundColor: colors.emerald,
                        borderWidth: 3,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        tension: 0.35,
                        yAxisID: 'yRate'
                    },
                    {
                        type: 'bar',
                        label: 'Highest Package (LPA)',
                        data: maxSalary,
                        backgroundColor: 'rgba(217, 119, 6, 0.85)',
                        borderColor: '#d97706',
                        borderWidth: 1,
                        borderRadius: 6,
                        yAxisID: 'ySalary'
                    },
                    {
                        type: 'bar',
                        label: 'Average Package (LPA)',
                        data: avgSalary,
                        backgroundColor: 'rgba(37, 99, 235, 0.85)',
                        borderColor: '#2563eb',
                        borderWidth: 1,
                        borderRadius: 6,
                        yAxisID: 'ySalary'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: colors.textColor,
                            font: { family: "'Plus Jakarta Sans', sans-serif", weight: '500', size: 12 },
                            usePointStyle: true,
                            padding: 18
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(15, 23, 42, 0.95)',
                        titleFont: { size: 13, weight: 'bold' },
                        bodyFont: { size: 12 },
                        padding: 12,
                        cornerRadius: 8,
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label.includes('Rate') || label.includes('%')) {
                                    return `${label}: ${context.parsed.y}%`;
                                }
                                return `${label}: ₹${context.parsed.y} LPA`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: { color: colors.gridColor },
                        ticks: { color: colors.textColor, font: { family: "'Plus Jakarta Sans', sans-serif" } }
                    },
                    ySalary: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Package (₹ LPA)',
                            color: colors.textColor,
                            font: { size: 11, weight: '600' }
                        },
                        grid: { color: colors.gridColor },
                        ticks: {
                            color: colors.textColor,
                            callback: value => `₹${value}L`
                        },
                        min: 0,
                        max: 30
                    },
                    yRate: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Placement Rate (%)',
                            color: colors.textColor,
                            font: { size: 11, weight: '600' }
                        },
                        grid: { drawOnChartArea: false },
                        ticks: {
                            color: colors.textColor,
                            callback: value => `${value}%`
                        },
                        min: 60,
                        max: 100
                    }
                }
            }
        });
    }

    // 2. Package Distribution Doughnut Chart
    const distCtx = document.getElementById('packageDistChart')?.getContext('2d');
    if (distCtx) {
        const distData = departmentData.placements.packageDistribution;
        packageDistChartInstance = new Chart(distCtx, {
            type: 'doughnut',
            data: {
                labels: distData.map(d => d.tier),
                datasets: [{
                    data: distData.map(d => d.count),
                    backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#64748b'],
                    borderWidth: 2,
                    borderColor: document.documentElement.classList.contains('dark-theme') ? '#1e293b' : '#ffffff',
                    hoverOffset: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '68%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: colors.textColor,
                            padding: 14,
                            font: { family: "'Plus Jakarta Sans', sans-serif", size: 11 },
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(15, 23, 42, 0.95)',
                        padding: 12,
                        cornerRadius: 8,
                        callbacks: {
                            label: function(context) {
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const val = context.raw;
                                const pct = ((val / total) * 100).toFixed(1);
                                return ` ${context.label}: ${val} students (${pct}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    // 3. Sector-Wise Share Horizontal Bar Chart
    const sectorCtx = document.getElementById('sectorShareChart')?.getContext('2d');
    if (sectorCtx) {
        const sectorData = departmentData.placements.sectorShare;
        sectorShareChartInstance = new Chart(sectorCtx, {
            type: 'bar',
            data: {
                labels: sectorData.map(s => s.sector),
                datasets: [{
                    label: 'Recruitment Share (%)',
                    data: sectorData.map(s => s.share),
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.85)',
                        'rgba(16, 185, 129, 0.85)',
                        'rgba(245, 158, 11, 0.85)',
                        'rgba(139, 92, 246, 0.85)',
                        'rgba(236, 72, 153, 0.85)'
                    ],
                    borderColor: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'],
                    borderWidth: 1,
                    borderRadius: 6
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(15, 23, 42, 0.95)',
                        padding: 12,
                        cornerRadius: 8,
                        callbacks: {
                            label: context => ` Share: ${context.parsed.x}% of total hires`
                        }
                    }
                },
                scales: {
                    x: {
                        grid: { color: colors.gridColor },
                        ticks: {
                            color: colors.textColor,
                            callback: v => `${v}%`
                        },
                        max: 45
                    },
                    y: {
                        grid: { display: false },
                        ticks: {
                            color: colors.textColor,
                            font: { family: "'Plus Jakarta Sans', sans-serif", weight: '500' }
                        }
                    }
                }
            }
        });
    }
}

// Re-render on theme toggle
window.addEventListener('themeChanged', () => {
    initPlacementCharts();
});
