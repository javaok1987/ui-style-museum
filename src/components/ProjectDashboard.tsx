import type { StyleData } from '../types/style'

interface ProjectDashboardProps {
  style: StyleData
}

type TaskStatus = 'In Progress' | 'Pending' | 'Done'

interface Task {
  name: string
  category: string
  status: TaskStatus
  done: boolean
}

const tasks: Task[] = [
  { name: 'Redesign Homepage', category: 'Design', status: 'In Progress', done: false },
  { name: 'Fix API Latency', category: 'Backend', status: 'Pending', done: false },
  { name: 'Update Documentation', category: 'Docs', status: 'Done', done: true },
  { name: 'Mobile Responsive Check', category: 'QA', status: 'In Progress', done: false },
]

export default function ProjectDashboard({ style }: ProjectDashboardProps) {
  const statusClasses = (status: TaskStatus): string => {
    switch (status) {
      case 'In Progress':
        return style.highlight
      case 'Pending':
        return `${style.badge} px-2 py-0.5`
      case 'Done':
        return `${style.highlight} opacity-60`
    }
  }

  return (
    <div className={`${style.card} p-6 style-transition`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold">Project Dashboard</h3>
          <p className="text-xs opacity-50 mt-0.5">Manage your team and tasks efficiently.</p>
        </div>
        <button className={`${style.buttonSec} px-4 py-2 text-sm flex items-center gap-2 style-transition`}>
          ⚙️ Settings
        </button>
      </div>

      {/* Search + Filter */}
      <div className="flex items-center gap-3 mb-5">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm opacity-40">🔍</span>
          <input
            type="text"
            placeholder="Search tasks..."
            className={`${style.input} w-full pl-9 pr-4 py-2 text-sm style-transition`}
          />
        </div>
        <button className={`${style.buttonSec} px-4 py-2 text-sm style-transition`}>
          Filter
        </button>
      </div>

      {/* Task List */}
      <div className="divide-y divide-current/10">
        {tasks.map((task) => (
          <div key={task.name} className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              {/* Checkbox */}
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 style-transition ${
                  task.done
                    ? `${style.button} border-none`
                    : 'border-2 border-current/20'
                }`}
              >
                {task.done && <span className="text-xs">✓</span>}
              </div>
              <div>
                <p className={`text-sm font-medium ${task.done ? 'line-through opacity-50' : ''}`}>
                  {task.name}
                </p>
                <p className="text-xs opacity-40">{task.category}</p>
              </div>
            </div>
            <span className={`text-xs font-medium style-transition ${statusClasses(task.status)}`}>
              {task.status}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-current/10">
        <p className="text-xs opacity-40">Showing 4 of 12 tasks</p>
        <div className="flex gap-3 text-sm">
          <button className={`opacity-40 cursor-not-allowed style-transition`}>Prev</button>
          <button className={`font-semibold ${style.highlight} style-transition`}>Next</button>
        </div>
      </div>
    </div>
  )
}
