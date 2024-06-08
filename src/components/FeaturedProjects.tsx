import { Card, CardContent } from "@/components/ui/card";
import { FaStar } from "react-icons/fa";

export default function FeaturedProjects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover the latest and greatest side projects, rated by our
              community.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <Card className="bg-white dark:bg-gray-950 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold">Productivity Planner</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  A simple yet powerful tool to help you stay organized and on
                  top of your tasks.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-gray-300 dark:fill-gray-600" />
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  4.2
                </span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-950 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold">Recipe Organizer</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Keep all your favorite recipes in one place and easily search
                  and filter through them.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-gray-300 dark:fill-gray-600" />
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  4.5
                </span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-950 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold">Habit Tracker</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Stay on top of your daily habits and build better routines.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-gray-300 dark:fill-gray-600" />
                <FaStar className="w-5 h-5 fill-gray-300 dark:fill-gray-600" />
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  3.7
                </span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-950 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold">Expense Tracker</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Easily track your expenses and stay on top of your finances.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-gray-300 dark:fill-gray-600" />
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  4.7
                </span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-950 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold">Todo List</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  A simple and intuitive todo list app to help you stay
                  organized.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  5.0
                </span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-950 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold">Meal Planner</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Plan your meals for the week and generate grocery lists with
                  ease.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-yellow-500" />
                <FaStar className="w-5 h-5 fill-gray-300 dark:fill-gray-600" />
                <FaStar className="w-5 h-5 fill-gray-300 dark:fill-gray-600" />
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  3.5
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
