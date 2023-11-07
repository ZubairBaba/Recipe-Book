import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;

@Repository
public class RecipeRepository {
    private List<Recipe> recipes = new ArrayList<>();

    public RecipeRepository() {
        // Initialize with sample recipes
        recipes.add(new Recipe("Chocolate Cake", "Chocolate Cake content..."));
        recipes.add(new Recipe("Chocolate Brownie", "Chocolate Brownie content..."));
    }

    public List<Recipe> getAllRecipes() {
        return recipes;
    }
}