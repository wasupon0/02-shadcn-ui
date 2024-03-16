import connectDB from "@/config/database";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Recipe {
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
  _id: string;
}

async function getRecipes(): Promise<Recipe[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/recipe`);

    //delay response
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const recipes = await getRecipes();
  console.log(recipes);
  return (
    <main>
      <div className="md:grid md:grid-cols-3 md:gap-8 flex flex-col justify-between m-6 gap-8 ">
        {recipes.map((recipe) => {
          return (
            <Card
              key={recipe._id}
              className="dark flex flex-col justify-between "
            >
              <CardHeader className="flex-row gap-4 recipes-center">
                <Avatar>
                  <AvatarImage src={`/img/${recipe.image}`} alt="recipe img" />
                  <AvatarFallback>{recipe.title.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{recipe.title}</CardTitle>
                  <CardDescription>{recipe.time} mins to cook.</CardDescription>
                </div>
              </CardHeader>

              <CardContent>
                <p>{recipe.description}</p>
              </CardContent>

              <CardFooter className="flex justify-between">
                <Button>View Recipe</Button>
                {recipe.vegan && <Badge variant={"secondary"}>Vegan!</Badge>}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
