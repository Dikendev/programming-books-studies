package sia.tacocloud.entities;

import lombok.Data;
import sia.tacocloud.entities.enuns.Type;

@Data
public class Ingredient {
    private final String id;
    private final String name;
    private final Type type;
}