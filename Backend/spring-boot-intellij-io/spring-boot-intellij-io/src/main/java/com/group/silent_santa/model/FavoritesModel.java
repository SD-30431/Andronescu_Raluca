package com.group.silent_santa.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "favorites")
public class FavoritesModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UsersModel user; // The user

    @ManyToOne
    @JoinColumn(name = "letter_id", nullable = false)
    private LettersModel letter; // The fav letter

}
